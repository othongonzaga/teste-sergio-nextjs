import './globals.css';
import '../styles/theme.css';
import { ThemeProvider } from '../contexts/ThemeContext';

export const metadata = {
  title: 'Login Maps',
  description: 'Aplicativo de mapas com login integrado.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
