import React from 'react';

function Events() {
  return (
    <div>
      <h1 className="text-4xl font-bold mb-6">Upcoming Events</h1>

      <div className="flex mb-8">
        <div className="w-1/3 mr-4">
          <div className="bg-lilac-200 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Conference on Autism</h2>
            <img
              src="https://autismcenter.org/wp-content/uploads/2023/06/Third-Annual-YES-Day-for-Autism-event-banner.png"
              alt="Community Event"
              className="mb-4 rounded-lg"
            />
            <p>
              Join us for a conference on autism scheduled for October 29, 2023, in Tunis. The event aims to encourage programs for autistic children through environmental and community development, capacity building, and more.
            </p>
          </div>
        </div>

        <div className="w-1/3 mr-4">
          <div className="bg-lilac-200 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Monthly Meeting</h2>
            <img
              src="https://media.licdn.com/dms/image/D4D12AQHRlKOgcvP3tw/article-cover_image-shrink_720_1280/0/1680624444120?e=2147483647&v=beta&t=QOiHU_UPtutvwW1oCzA-LwSjEdq7GbmnMKfAhGf3Jjk"
              alt="Community Event"
              className="mb-4 rounded-lg"
            />
            <p>
              Our monthly meeting is scheduled for December 23-24, 2023. We will discuss various topics related to autism spectrum disorders, intervention methods, therapeutic techniques, and integration mechanisms.
            </p>
          </div>
        </div>

        <div className="w-1/3">
          <div className="bg-lilac-200 p-6 rounded-md">
            <h2 className="text-xl font-semibold mb-4">Community Event</h2>
            <img
              src="https://oakland.edu/Assets/Oakland/oumagazine/graphics/news/SEHS/2021/AutismAwareness_1280.jpg"
              alt="Community Event"
              className="mb-4 rounded-lg"
            />
            <p>
              Don't miss our upcoming community event. We'll raise awareness about autism, share experiences, and discuss the legislative framework for supporting individuals with autism spectrum disorders.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
