import { HeadingProps } from '../types/types';

function Heading({ title, subtitle }: HeadingProps) {
  return (
    <div className='py-6 text-center'>
      <p className='mb-2 uppercase tracking-wide'>{subtitle}</p>
      <h2 className='text-3xl font-semibold uppercase'>{title}</h2>
    </div>
  );
}

export default Heading;
