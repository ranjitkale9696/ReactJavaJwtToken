import React from 'react'
const Footer = () => {
  return (
    <footer className=" mt-20 border-t py-10 border-neutral-700">
      {/* <div className=" grid grid-cols-2 m-2 lg:grid-cols-3 gap-4 m-20"> */}
      <div className=" grid text-center tracking-wide sm:grid-cols-1 md:grid-cols-2 m-2 lg:grid-cols-3 gap-4 ">
      
        <div >
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
           

          <li >
                <a href="" className="text-neutral-300 hover:text-white">Getting Started</a>
              </li>
              <li >
                <a href="" className="text-neutral-300 hover:text-white">Documentation</a>
              </li>
              <li >
                <a href="" className="text-neutral-300 hover:text-white">Tutorials</a>
              </li>
              <li >
                <a href="" className="text-neutral-300 hover:text-white">Community Forums</a>
              </li>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
           
          <li >
                <a href="" className="text-neutral-300 hover:text-white">Events</a>
              </li>

              <li >
                <a href="" className="text-neutral-300 hover:text-white">Meetups</a>
              </li>
              <li >
                <a href="" className="text-neutral-300 hover:text-white">Conferences</a>
              </li>
              <li >
                <a href="" className="text-neutral-300 hover:text-white">Hackathons</a>
              </li>
              <li >
                <a href="" className="text-neutral-300 hover:text-white">Jobs</a>
              </li>
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
          
              <li>
                <a href="" className="text-neutral-300 hover:text-white">Features</a>
              </li>
              <li>
                <a href="" className="text-neutral-300 hover:text-white">Supported Devices</a>
              </li>
              <li>
                <a href="" className="text-neutral-300 hover:text-white">System Requirements</a>
              </li>
              <li>
                <a href="" className="text-neutral-300 hover:text-white">Downloads</a>
              </li>
              <li>
                <a href="" className="text-neutral-300 hover:text-white">Release Notes</a>
              </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
