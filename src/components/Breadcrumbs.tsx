import { HiOutlineHome } from 'react-icons/hi';
import { Link, useLocation } from 'react-router-dom';

function Breadcrumbs() {
  const { pathname } = useLocation();

  const pathnames = pathname.split('/').filter((x) => x);
  let breadcrumbsPath = '';
  return (
    <div className='flex items-center text-sm'>
      <Link to='/' className='flex items-center'>
        <HiOutlineHome className='transition hover:text-blue-500' />
      </Link>

      {pathnames.map((pathname, index) => {
        breadcrumbsPath += `/${pathname}`;
        const isLast = index === pathnames.length - 1;
        return (
          <span key={index} className='flex items-center'>
            {!isLast ? (
              <>
                <span className='mx-1'>/</span>
                <Link
                  className='transition hover:text-blue-500'
                  to={breadcrumbsPath}
                >
                  {pathname}
                </Link>
              </>
            ) : (
              <>
                <span className='mx-1'>/</span>
                <span>{pathname}</span>
              </>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
