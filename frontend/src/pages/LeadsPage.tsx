import React, { useState } from 'react';
import { useNavigate } from '@tanstack/react-router';
import { Download, Filter, RefreshCw } from 'lucide-react';
import { useInternetIdentity } from '../hooks/useInternetIdentity';
import {
  useGetAllContactFormSubmissions,
  useIsCallerAdmin,
  useUpdateContactFormSubmissionStatus,
} from '../hooks/useQueries';
import { Variant, Variant__3 } from '../backend';
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '../components/ui/table';
import { Skeleton } from '../components/ui/skeleton';

const statusLabels: Record<string, string> = {
  new: 'New',
  contacted: 'Contacted',
  resolved: 'Resolved',
};

const statusColors: Record<string, string> = {
  new: 'bg-black text-white',
  contacted: 'bg-gray-600 text-white',
  resolved: 'bg-gray-300 text-black',
};

const jurisdictionLabels: Record<string, string> = {
  Hyderabad: 'Hyderabad',
  Secunderabad: 'Secunderabad',
  Rangareddy: 'Rangareddy',
  Cyberabad: 'Cyberabad',
};

export default function LeadsPage() {
  const navigate = useNavigate();
  const { identity } = useInternetIdentity();
  const isAuthenticated = !!identity;

  const { data: isAdmin, isLoading: adminLoading } = useIsCallerAdmin();
  const { data: submissions, isLoading: submissionsLoading, refetch } = useGetAllContactFormSubmissions();
  const updateStatus = useUpdateContactFormSubmissionStatus();

  const [filterJurisdiction, setFilterJurisdiction] = useState<string>('all');
  const [filterStatus, setFilterStatus] = useState<string>('all');

  if (!isAuthenticated || (!adminLoading && !isAdmin)) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center border border-black p-10">
          <h1 className="font-serif text-2xl font-bold text-black mb-3">Access Denied</h1>
          <p className="text-gray-600 mb-6">You must be an admin to view this page.</p>
          <button
            onClick={() => navigate({ to: '/' })}
            className="bg-black text-white px-6 py-2 text-sm font-medium uppercase tracking-wide hover:bg-gray-900 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  const filtered = (submissions ?? []).filter((s) => {
    const jMatch = filterJurisdiction === 'all' || s.jurisdiction === filterJurisdiction;
    const sMatch = filterStatus === 'all' || s.status === filterStatus;
    return jMatch && sMatch;
  });

  const exportCSV = () => {
    const rows = [
      ['ID', 'Name', 'Email', 'Phone', 'Jurisdiction', 'Message', 'Status', 'Date'],
      ...filtered.map((s) => [
        String(s.id),
        s.name,
        s.email,
        s.phoneNumber,
        s.jurisdiction,
        s.message ?? '',
        s.status,
        new Date(Number(s.timestamp) / 1_000_000).toLocaleDateString(),
      ]),
    ];
    const csv = rows.map((r) => r.map((c) => `"${c}"`).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'leads.csv';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl font-bold text-black">Leads Dashboard</h1>
            <p className="text-gray-600 mt-1">
              {filtered.length} submission{filtered.length !== 1 ? 's' : ''}
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => refetch()}
              className="flex items-center gap-2 border border-black px-4 py-2 text-sm font-medium text-black hover:bg-gray-100 transition-colors"
            >
              <RefreshCw className="w-4 h-4" /> Refresh
            </button>
            <button
              onClick={exportCSV}
              className="flex items-center gap-2 bg-black text-white px-4 py-2 text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              <Download className="w-4 h-4" /> Export CSV
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-6 p-4 border border-black bg-gray-50">
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-black" />
            <span className="text-sm font-medium text-black uppercase tracking-wide">Filters:</span>
          </div>
          <select
            value={filterJurisdiction}
            onChange={(e) => setFilterJurisdiction(e.target.value)}
            className="border border-black px-3 py-1.5 text-sm text-black bg-white focus:outline-none focus:ring-1 focus:ring-black"
          >
            <option value="all">All Jurisdictions</option>
            {Object.entries(jurisdictionLabels).map(([val, label]) => (
              <option key={val} value={val}>{label}</option>
            ))}
          </select>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="border border-black px-3 py-1.5 text-sm text-black bg-white focus:outline-none focus:ring-1 focus:ring-black"
          >
            <option value="all">All Statuses</option>
            {Object.entries(statusLabels).map(([val, label]) => (
              <option key={val} value={val}>{label}</option>
            ))}
          </select>
        </div>

        {/* Table */}
        {submissionsLoading ? (
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => <Skeleton key={i} className="h-12 w-full" />)}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 border border-black">
            <p className="font-serif text-xl text-black mb-2">No leads found</p>
            <p className="text-gray-500 text-sm">Try adjusting your filters.</p>
          </div>
        ) : (
          <div className="border border-black overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-b border-black bg-black">
                  <TableHead className="text-white font-medium uppercase tracking-wide text-xs">Name</TableHead>
                  <TableHead className="text-white font-medium uppercase tracking-wide text-xs">Email</TableHead>
                  <TableHead className="text-white font-medium uppercase tracking-wide text-xs">Phone</TableHead>
                  <TableHead className="text-white font-medium uppercase tracking-wide text-xs">Jurisdiction</TableHead>
                  <TableHead className="text-white font-medium uppercase tracking-wide text-xs">Message</TableHead>
                  <TableHead className="text-white font-medium uppercase tracking-wide text-xs">Date</TableHead>
                  <TableHead className="text-white font-medium uppercase tracking-wide text-xs">Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.map((s) => (
                  <TableRow key={String(s.id)} className="border-b border-gray-200 hover:bg-gray-50">
                    <TableCell className="font-medium text-black">{s.name}</TableCell>
                    <TableCell className="text-gray-700 text-sm">{s.email}</TableCell>
                    <TableCell className="text-gray-700 text-sm">{s.phoneNumber}</TableCell>
                    <TableCell className="text-gray-700 text-sm">{s.jurisdiction}</TableCell>
                    <TableCell className="text-gray-700 text-sm max-w-xs truncate">{s.message ?? '—'}</TableCell>
                    <TableCell className="text-gray-700 text-sm">
                      {new Date(Number(s.timestamp) / 1_000_000).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      <select
                        value={s.status}
                        onChange={(e) =>
                          updateStatus.mutate({ id: s.id, status: e.target.value as Variant })
                        }
                        className={`text-xs px-2 py-1 border border-black font-medium uppercase tracking-wide focus:outline-none ${statusColors[s.status] ?? 'bg-white text-black'}`}
                      >
                        {Object.entries(statusLabels).map(([val, label]) => (
                          <option key={val} value={val}>{label}</option>
                        ))}
                      </select>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        )}
      </div>
    </div>
  );
}
