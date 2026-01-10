const Announcements = () => {
  return (
    <div className="bg-white rounded-md h-full p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Annonces</h1>
        <span className="text-xs text-gray-400"> Voir plus</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-zaySkyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              24-01-2026
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            quibusdam unde ratione laudantium.
          </p>
        </div>
        <div className="bg-zayPurpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              24-01-2026
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            quibusdam unde ratione laudantium.
          </p>
        </div>
        <div className="bg-zaySkyYellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              24-01-2026
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum
            quibusdam unde ratione laudantium.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
