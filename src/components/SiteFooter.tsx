export default function SiteFooter() {
  return (
    <footer className="border-t py-6 text-sm text-neutral-600 dark:text-neutral-400">
      <div className="container mx-auto text-center">© {new Date().getFullYear()} Vectario</div>
    </footer>
  );
}
