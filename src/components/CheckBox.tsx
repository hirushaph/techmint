type CheckboxPropType = {
  item: string;
};

function CheckBox({ item }: CheckboxPropType) {
  return (
    <div className='checkbox-wrapper relative flex items-center gap-2'>
      <input
        type='checkbox'
        id='checkbox'
        className='absolute inset-0 accent-slate-700 opacity-0'
      />
      <div className='fake-checkbox grid h-5 w-5 place-items-center rounded-md border-2 border-blue-400 text-white transition'>
        <svg
          fill='#000000'
          version='1.1'
          id='Capa_1'
          xmlns='http://www.w3.org/2000/svg'
          width='12px'
          height='12px'
          viewBox='0 0 45.701 45.7'
          className='check-icon pointer-events-auto invisible'
        >
          <g>
            <g>
              <path
                d='M20.687,38.332c-2.072,2.072-5.434,2.072-7.505,0L1.554,26.704c-2.072-2.071-2.072-5.433,0-7.504
			c2.071-2.072,5.433-2.072,7.505,0l6.928,6.927c0.523,0.522,1.372,0.522,1.896,0L36.642,7.368c2.071-2.072,5.433-2.072,7.505,0
			c0.995,0.995,1.554,2.345,1.554,3.752c0,1.407-0.559,2.757-1.554,3.752L20.687,38.332z'
              />
            </g>
          </g>
        </svg>
      </div>
      <label htmlFor='checkbox'>{item}</label>
    </div>
  );
}

export default CheckBox;
