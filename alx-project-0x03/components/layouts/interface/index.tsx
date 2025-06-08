export interface PageRouteProps {
  params: {
    [key: string]: string | string[];
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  className?: string;
}

export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
}