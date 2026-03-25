export default function Footer() {
  return (
    <footer className="pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center text-sm text-white/45">
          © {new Date().getFullYear()} Muheez. Built with calm motion and clean code.
        </div>
      </div>
    </footer>
  );
}
