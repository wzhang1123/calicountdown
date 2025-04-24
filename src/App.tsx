// // import { useRef, useEffect } from "react";
// // import Globe from "globe.gl";
// // import Countdown, { CountdownRenderProps } from "react-countdown";
// // import { Canvas } from "@react-three/fiber";
// // import * as THREE from "three"; // Add THREE import

// // import "./App.css";

// // function App() {
// //   const globeEl = useRef(null);
// //   const caliDate: Date = new Date("May 22, 2025 9:00:00");

// //   useEffect(() => {
// //     if (!globeEl.current) return;

// //     // Gen random data
// //     const N = 1;
// //     const arcsData = [...Array(N).keys()].map(() => ({
// //       startLat: 40.6446,
// //       startLng: -73.7797,
// //       endLat: 37.7749,
// //       endLng: -122.4194,
// //       color: [
// //         ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
// //         ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
// //       ],
// //     }));

// //     const myGlobe = new Globe(globeEl.current)
// //       .globeImageUrl(
// //         "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
// //       )
// //       .arcsData(arcsData)
// //       .arcColor("color")
// //       .arcStroke(1)
// //       .arcDashLength(0.6)
// //       .arcDashGap(0.2)
// //       .arcDashAnimateTime(2000)
// //       .pointOfView({ lat: 39.6, lng: -98.5, altitude: 4 }); // aim at continental US centroid

// //     const scene = myGlobe.scene();
// //     // scene.background = new THREE.Color(0xffffff);

// //     // camera.lookAt(0, -500, 500);
// //     // myGlobe.pointOfView({
// //     //   position: { x: 0, y: 3, z: 4 }, // Manual position
// //     //   focus: { x: 0, y: -2, z: 0 }, // Point to look at
// //     // });

// //     // Cleanup function
// //     return () => {
// //       // Any cleanup needed for globe
// //     };
// //   }, []); // Empty dependency array means this runs once on mount

// //   // Custom renderer that shows only days, hours, minutes
// //   const renderer = ({
// //     days,
// //     hours,
// //     minutes,
// //     seconds,
// //   }: CountdownRenderProps) => {
// //     return (
// //       <div className="countdown-display">
// //         {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
// //       </div>
// //     );
// //   };

// //   return (
// //     <div style={{ position: "relative", width: "100%", height: "100vh" }}>
// //       <div
// //         style={{
// //           position: "absolute",
// //           top: "15%",
// //           left: "50%",
// //           transform: "translate(-50%, -50%)",
// //           zIndex: 10,
// //           color: "white",
// //           fontSize: "2rem",
// //           textAlign: "center",
// //           textShadow: "0 0 10px rgba(0,0,0,0.8)",
// //         }}
// //       >
// //         <Countdown date={caliDate} renderer={renderer} />
// //       </div>
// //       <div ref={globeEl} style={{ width: "100%", height: "100%" }}></div>
// //     </div>
// //   );
// // }

// // export default App;

// import { useRef, useEffect } from "react";
// import Globe from "globe.gl";
// import Countdown, { CountdownRenderProps } from "react-countdown";
// import { Canvas } from "@react-three/fiber";
// import * as THREE from "three";

// import "./App.css";

// function App() {
//   const globeEl = useRef<HTMLDivElement>(null);
//   const globeInstance = useRef<any>(null); // Add a ref to store the globe instance
//   const caliDate: Date = new Date("May 22, 2025 9:00:00");

//   useEffect(() => {
//     if (!globeEl.current) return;

//     // Gen random data
//     const N = 1;
//     const arcsData = [...Array(N).keys()].map(() => ({
//       startLat: 40.6446,
//       startLng: -73.7797,
//       endLat: 37.7749,
//       endLng: -122.4194,
//       color: [
//         ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
//         ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
//       ],
//     }));

//     // Store the globe instance in a ref so we can access it in the resize handler
//     globeInstance.current = new Globe(globeEl.current)
//       .width(window.innerWidth) // Set initial width to window width
//       .height(window.innerHeight) // Set initial height to window height
//       .globeImageUrl(
//         "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
//       )
//       .arcsData(arcsData)
//       .arcColor("color")
//       .arcStroke(1)
//       .arcDashLength(0.6)
//       .arcDashGap(0.2)
//       .arcDashAnimateTime(2000)
//       .pointOfView({ lat: 39.6, lng: -98.5, altitude: 4 });

//     const scene = globeInstance.current.scene();
//     // scene.background = new THREE.Color(0xffffff);

//     // Add window resize event listener
//     const handleResize = () => {
//       if (globeInstance.current) {
//         // Update globe dimensions on window resize
//         globeInstance.current
//           .width(window.innerWidth)
//           .height(window.innerHeight);
//       }
//     };

//     // Add the event listener
//     window.addEventListener("resize", handleResize);

//     // Cleanup function
//     return () => {
//       // Remove event listener on component unmount
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // Custom renderer that shows only days, hours, minutes
//   const renderer = ({
//     days,
//     hours,
//     minutes,
//     seconds,
//   }: CountdownRenderProps) => {
//     return (
//       <div className="countdown-display">
//         <p>Countdown to ✨California✨</p>
//         <h3>
//           {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
//         </h3>
//       </div>
//     );
//   };

//   return (
//     <div style={{ position: "relative", width: "100%", height: "100vh" }}>
//       <div
//         style={{
//           position: "absolute",
//           top: "15%",
//           left: "50%",
//           transform: "translate(-50%, -50%)",
//           zIndex: 10,
//           color: "white",
//           fontSize: "2rem",
//           textAlign: "center",
//           textShadow: "0 0 10px rgba(0,0,0,0.8)",
//         }}
//       >
//         <Countdown date={caliDate} renderer={renderer} />
//       </div>
//       <div ref={globeEl} style={{ width: "100%", height: "100%" }}></div>
//     </div>
//   );
// }

// export default App;

import { useRef, useEffect } from "react";
import Globe from "globe.gl";
import Countdown, { CountdownRenderProps } from "react-countdown";
import * as THREE from "three";

import "./App.css";

function App() {
  const globeEl = useRef<HTMLDivElement>(null);
  const globeInstance = useRef<any>(null);
  const caliDate: Date = new Date("May 22, 2025 9:00:00");

  useEffect(() => {
    if (!globeEl.current) return;

    // Gen random data
    const N = 1;
    const arcsData = [...Array(N).keys()].map(() => ({
      startLat: 40.6446,
      startLng: -73.7797,
      endLat: 37.7749,
      endLng: -122.4194,
      color: [
        ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
        ["red", "white", "blue", "green"][Math.round(Math.random() * 3)],
      ],
    }));

    // Store the globe instance in a ref so we can access it in the resize handler
    globeInstance.current = new Globe(globeEl.current)
      .width(window.innerWidth)
      .height(window.innerHeight)
      .globeImageUrl(
        "//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
      )
      .arcsData(arcsData)
      .arcColor("color")
      .arcStroke(1)
      .arcDashLength(0.6)
      .arcDashGap(0.2)
      .arcDashAnimateTime(2000)
      .pointOfView({ lat: 39.6, lng: -98.5, altitude: 4 });

    const scene = globeInstance.current.scene();
    // scene.background = new THREE.Color(0xffffff);

    // Add window resize event listener
    const handleResize = () => {
      if (globeInstance.current) {
        // Update globe dimensions on window resize
        globeInstance.current
          .width(window.innerWidth)
          .height(window.innerHeight);
      }
    };

    // Add the event listener
    window.addEventListener("resize", handleResize);

    // Initial resize to ensure correct sizing
    handleResize();

    // Cleanup function
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Custom renderer that shows only days, hours, minutes
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
  }: CountdownRenderProps) => {
    return (
      <div className="countdown-display">
        <p className="countdown-title">Countdown to ✨California✨</p>
        <h3 className="countdown-time">
          {days} days, {hours} hours, {minutes} minutes, {seconds} seconds
        </h3>
      </div>
    );
  };

  return (
    <div className="app-container">
      <div className="countdown-container">
        <Countdown date={caliDate} renderer={renderer} />
      </div>
      <div ref={globeEl} className="globe-container"></div>
    </div>
  );
}

export default App;
