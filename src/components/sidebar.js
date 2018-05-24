import React, { Component } from 'react';
import '../App.css';
import videoimage from '../video.png';

class Sidebar extends Component {
  render() {
    return (
      <div className="sidebarDiv">
		  <div className="sidebar-wrapper">
		      <div className="logo text-center">
                  <a href="javascript:void(0)" className="simple-text">
                  	  MANHATTAN	
                  </a>
              </div>
			  <ul className="nav list-group list-group-flush sidebarLinks">
				  <li className="list-group-item border-0 pl-5 active"><a href="" className="text-secondary"><img alt="video image" src={videoimage} className="icons pr-2"/>DASHBOARD</a></li>
				  <li className="list-group-item border-0 pl-5"><a href="" className="text-secondary"><img alt="video image" src={videoimage} className="icons pr-2"/>VIDEOS</a></li>
				  <li className="list-group-item border-0 pl-5"><a href="" className="text-secondary"><img alt="video image" src={videoimage} className="icons pr-2"/>PHOTOS</a></li>
				  <li className="list-group-item border-0 pl-5"><a href="" className="text-secondary"><img alt="video image" src={videoimage} className="icons pr-2"/>TEST1</a></li>
				  <li className="list-group-item border-0 pl-5"><a href="" className="text-secondary"><img alt="video image" src={videoimage} className="icons pr-2"/>TEST2</a></li>
			  </ul>
		  </div>
      </div>
    );
  }
}

export default Sidebar;
