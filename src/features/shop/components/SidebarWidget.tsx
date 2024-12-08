type SidebarWidgetProps = {
  title: string;
  children: React.ReactNode;
};

function SidebarWidget({ title, children }: SidebarWidgetProps) {
  return (
    <div className='price mb-12'>
      <h2 className='mb-2 text-lg font-semibold uppercase text-dark-700'>
        {title}
      </h2>
      {children}
    </div>
  );
}

export default SidebarWidget;
