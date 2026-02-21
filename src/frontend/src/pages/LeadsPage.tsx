import { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { useGetAllContactFormSubmissions, useIsCallerAdmin, useUpdateContactFormSubmissionStatus } from '../hooks/useQueries';
import { CheckCircle2, Clock, AlertCircle, Download, Loader2 } from 'lucide-react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import { Variant } from '../backend';
import { toast } from 'sonner';

export default function LeadsPage() {
  const navigate = useNavigate();
  const { identity } = useInternetIdentity();
  const { data: isAdmin, isLoading: isAdminLoading, isFetched: isAdminFetched } = useIsCallerAdmin();
  const { data: submissions = [], isLoading, refetch } = useGetAllContactFormSubmissions();
  const updateStatusMutation = useUpdateContactFormSubmissionStatus();
  const [filterJurisdiction, setFilterJurisdiction] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  // Check authentication - only redirect if we're certain user is not authenticated
  if (!identity && !isAdminLoading) {
    return (
      <div className="container py-24">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Authentication Required</AlertTitle>
          <AlertDescription>
            You must be logged in to access this page. Please log in and try again.
          </AlertDescription>
        </Alert>
        <div className="mt-4 text-center">
          <Button onClick={() => navigate({ to: '/' })}>Go to Home</Button>
        </div>
      </div>
    );
  }

  // Show loading state while checking admin status
  if (isAdminLoading || !isAdminFetched) {
    return (
      <div className="container py-24">
        <div className="text-center">
          <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Verifying admin access...</p>
        </div>
      </div>
    );
  }

  // Check admin access - only show denial if we're certain user is not admin
  if (isAdminFetched && isAdmin === false) {
    return (
      <div className="container py-24">
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Access Denied</AlertTitle>
          <AlertDescription>
            You do not have permission to access this page. Only administrators can view client leads.
          </AlertDescription>
        </Alert>
        <div className="mt-4 text-center">
          <Button onClick={() => navigate({ to: '/' })}>Go to Home</Button>
        </div>
      </div>
    );
  }

  const filteredSubmissions = submissions.filter((submission) => {
    const jurisdictionMatch = filterJurisdiction === 'all' || submission.jurisdiction === filterJurisdiction;
    const statusMatch = filterStatus === 'all' || submission.status === filterStatus;
    return jurisdictionMatch && statusMatch;
  });

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'new':
        return <Badge variant="default" className="bg-blue-500"><Clock className="h-3 w-3 mr-1" />New</Badge>;
      case 'contacted':
        return <Badge variant="secondary"><CheckCircle2 className="h-3 w-3 mr-1" />Contacted</Badge>;
      case 'resolved':
        return <Badge variant="outline" className="text-green-600 border-green-600"><CheckCircle2 className="h-3 w-3 mr-1" />Resolved</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const formatDate = (timestamp: bigint) => {
    const date = new Date(Number(timestamp) / 1000000);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleStatusChange = async (id: bigint, newStatus: string) => {
    try {
      await updateStatusMutation.mutateAsync({ 
        id, 
        status: newStatus as Variant 
      });
      toast.success('Status updated successfully');
      refetch();
    } catch (error) {
      toast.error('Failed to update status');
      console.error(error);
    }
  };

  const exportToCSV = () => {
    const headers = ['ID', 'Name', 'Phone', 'Email', 'Jurisdiction', 'Status', 'Message', 'Date'];
    const rows = filteredSubmissions.map(sub => [
      sub.id.toString(),
      sub.name,
      sub.phoneNumber,
      sub.email,
      sub.jurisdiction,
      sub.status,
      sub.message || '',
      formatDate(sub.timestamp)
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `leads-${new Date().toISOString().split('T')[0]}.csv`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="container py-12">
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold">Client Leads</h1>
            <p className="text-muted-foreground mt-2">
              Manage all contact form submissions from The Jurists website
            </p>
          </div>
          <Button onClick={exportToCSV} variant="outline" disabled={filteredSubmissions.length === 0}>
            <Download className="h-4 w-4 mr-2" />
            Export to CSV
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Filter Leads</CardTitle>
            <CardDescription>Filter submissions by jurisdiction and status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Jurisdiction</label>
                <Select value={filterJurisdiction} onValueChange={setFilterJurisdiction}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Jurisdictions" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Jurisdictions</SelectItem>
                    <SelectItem value="Hyderabad">Hyderabad</SelectItem>
                    <SelectItem value="Secunderabad">Secunderabad</SelectItem>
                    <SelectItem value="Rangareddy">Rangareddy</SelectItem>
                    <SelectItem value="Cyberabad">Cyberabad</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Status</label>
                <Select value={filterStatus} onValueChange={setFilterStatus}>
                  <SelectTrigger>
                    <SelectValue placeholder="All Statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Statuses</SelectItem>
                    <SelectItem value="new">New</SelectItem>
                    <SelectItem value="contacted">Contacted</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>
              Submissions ({filteredSubmissions.length})
            </CardTitle>
            <CardDescription>
              {filterJurisdiction !== 'all' || filterStatus !== 'all' 
                ? 'Filtered results' 
                : 'All contact form submissions'}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading ? (
              <div className="text-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary mx-auto mb-4" />
                <p className="text-muted-foreground">Loading submissions...</p>
              </div>
            ) : filteredSubmissions.length === 0 ? (
              <div className="text-center py-12">
                <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium mb-2">No submissions found</p>
                <p className="text-muted-foreground">
                  {submissions.length === 0 
                    ? 'No contact form submissions yet.' 
                    : 'Try adjusting your filters.'}
                </p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Jurisdiction</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Message</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSubmissions.map((submission) => (
                      <TableRow key={submission.id.toString()}>
                        <TableCell className="font-mono text-xs">{submission.id.toString()}</TableCell>
                        <TableCell className="font-medium">{submission.name}</TableCell>
                        <TableCell>{submission.phoneNumber}</TableCell>
                        <TableCell>{submission.email}</TableCell>
                        <TableCell>{submission.jurisdiction}</TableCell>
                        <TableCell>{getStatusBadge(submission.status)}</TableCell>
                        <TableCell className="max-w-xs truncate">
                          {submission.message || <span className="text-muted-foreground italic">No message</span>}
                        </TableCell>
                        <TableCell className="text-sm text-muted-foreground whitespace-nowrap">
                          {formatDate(submission.timestamp)}
                        </TableCell>
                        <TableCell>
                          <Select
                            value={submission.status}
                            onValueChange={(value) => handleStatusChange(submission.id, value)}
                            disabled={updateStatusMutation.isPending}
                          >
                            <SelectTrigger className="w-32">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="new">New</SelectItem>
                              <SelectItem value="contacted">Contacted</SelectItem>
                              <SelectItem value="resolved">Resolved</SelectItem>
                            </SelectContent>
                          </Select>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
