import { useState } from 'react';

function DetailsTabs() {
  const [currentTab, setCurrentTab] = useState<string>('des');
  return (
    <>
      <div className='flex justify-center gap-10 bg-dark-100 py-2'>
        <div
          className={`font-semibold transition hover:cursor-pointer hover:text-blue-400 ${currentTab === 'des' ? 'text-blue-500' : ''}`}
          onClick={() => setCurrentTab('des')}
        >
          Description
        </div>
        <div
          className={`font-semibold transition hover:cursor-pointer hover:text-blue-400 ${currentTab === 'des' ? '' : 'text-blue-500'}`}
          onClick={() => setCurrentTab('specs')}
        >
          Specification
        </div>
      </div>
      {currentTab === 'des' ? (
        <div>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          voluptatibus sit earum porro qui eum vitae deserunt. Illum quam nobis
          laborum cum excepturi minima eius atque! Quo consequuntur mollitia
          modi!
        </div>
      ) : (
        <div>Sepecifactions</div>
      )}
    </>
  );
}

export default DetailsTabs;
