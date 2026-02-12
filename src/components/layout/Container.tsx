type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

export function Container({ children, className = "", style }: ContainerProps) {
  return (
    <div className={`px-4 md:px-6 lg:px-8 ${className}`} style={style}>
      {children}
    </div>
  );
}
