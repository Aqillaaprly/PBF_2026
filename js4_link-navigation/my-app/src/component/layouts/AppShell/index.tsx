export default function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <main>{children}</main>
      <footer style={{ background: '#333', color: '#fff', padding: '10px' }}>
        Footer - Praktikum Next.js
      </footer>
    </div>
  );
}