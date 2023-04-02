import './../globals.css';
import SearchHeader from '@/components/SearchHeader';

export const metadata = {
  title: "Rob's Google Clone",
  description: 'Google Clone built with NextJS 13 and Tailwind CSS',
};

export default function SearchLayout({ children }) {
  return (
    <div>
      <SearchHeader />
      {children}
    </div>
  );
}
