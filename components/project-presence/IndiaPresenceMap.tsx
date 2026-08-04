// "use client";

// import {
//   useEffect,
//   useMemo,
//   useRef,
//   useState,
// } from "react";

// import type { StatePresence } from "@/data/projectPresence";

// type IndiaPresenceMapProps = {
//   states: StatePresence[];
//   activeState: StatePresence;
//   onStateChange: (state: StatePresence) => void;
// };

// const SVG_NAMESPACE = "http://www.w3.org/2000/svg";

// function normalizeName(value: string) {
//   return value
//     .toLowerCase()
//     .replace(/&/g, "and")
//     .replace(/[^a-z0-9]/g, "");
// }

// function findPresenceState(
//   title: string,
//   states: StatePresence[],
// ) {
//   const normalizedTitle = normalizeName(title);

//   return states.find(
//     (state) =>
//       normalizeName(state.state) === normalizedTitle,
//   );
// }

// function createSvgCircle(
//   className: string,
//   cx: number,
//   cy: number,
//   radius: number,
// ) {
//   const circle = document.createElementNS(
//     SVG_NAMESPACE,
//     "circle",
//   );

//   circle.setAttribute("cx", String(cx));
//   circle.setAttribute("cy", String(cy));
//   circle.setAttribute("r", String(radius));
//   circle.setAttribute("class", className);

//   return circle;
// }

// export default function IndiaPresenceMap({
//   states,
//   activeState,
//   onStateChange,
// }: IndiaPresenceMapProps) {
//   const mapContainerRef = useRef<HTMLDivElement>(null);

//   const [svgMarkup, setSvgMarkup] = useState("");
//   const [isLoading, setIsLoading] = useState(true);

//   const stateLookup = useMemo(() => {
//     return new Map(
//       states.map((state) => [
//         normalizeName(state.state),
//         state,
//       ]),
//     );
//   }, [states]);

//   /*
//    * Load the SVG as inline markup.
//    * This allows React/JavaScript to access every state path.
//    */
//   useEffect(() => {
//     let isMounted = true;

//     async function loadMap() {
//       try {
//         const response = await fetch(
//           "/images/maps/india-map-blue.svg",
//         );

//         if (!response.ok) {
//           throw new Error(
//             `Unable to load map: ${response.status}`,
//           );
//         }

//         const svgText = await response.text();

//         if (isMounted) {
//           setSvgMarkup(svgText);
//         }
//       } catch (error) {
//         console.error(
//           "India map loading error:",
//           error,
//         );
//       } finally {
//         if (isMounted) {
//           setIsLoading(false);
//         }
//       }
//     }

//     loadMap();

//     return () => {
//       isMounted = false;
//     };
//   }, []);

//   /*
//    * Prepare paths and place markers using each state's
//    * real SVG coordinates.
//    */
//   useEffect(() => {
//     const container = mapContainerRef.current;

//     if (!container || !svgMarkup) {
//       return;
//     }

//     const svg = container.querySelector("svg");

//     if (!svg) {
//       return;
//     }

//     svg.classList.add("interactive-india-svg");
//     svg.setAttribute(
//       "preserveAspectRatio",
//       "xMidYMid meet",
//     );
//     svg.setAttribute(
//       "aria-label",
//       "Interactive India map showing Steelbuild presence",
//     );
//     svg.setAttribute("role", "img");

//     /*
//      * Remove old generated marker layer whenever
//      * this effect runs again.
//      */
//     svg
//       .querySelector("#steelbuild-marker-layer")
//       ?.remove();

//     const markerLayer = document.createElementNS(
//       SVG_NAMESPACE,
//       "g",
//     );

//     markerLayer.setAttribute(
//       "id",
//       "steelbuild-marker-layer",
//     );

//     svg.appendChild(markerLayer);

//     const allPaths = Array.from(
//       svg.querySelectorAll<SVGPathElement>(
//         "path[title]",
//       ),
//     );

//     const cleanups: Array<() => void> = [];

//     allPaths.forEach((path) => {
//       const title =
//         path.getAttribute("title") ?? "";

//       const presenceState = findPresenceState(
//         title,
//         states,
//       );

//       path.classList.add("india-state-path");

//       /*
//        * States without Steelbuild presence retain
//        * the lighter neutral map style.
//        */
//       if (!presenceState) {
//         path.classList.add(
//           "india-state-not-covered",
//         );

//         return;
//       }

//       path.classList.add("india-state-covered");
//       path.dataset.presenceId = presenceState.id;
//       path.setAttribute("tabindex", "0");
//       path.setAttribute(
//         "aria-label",
//         `View Steelbuild presence in ${presenceState.state}`,
//       );

//       const selectState = () => {
//         onStateChange(presenceState);
//       };

//       path.addEventListener(
//         "mouseenter",
//         selectState,
//       );
//       path.addEventListener("focus", selectState);
//       path.addEventListener("click", selectState);

//       cleanups.push(() => {
//         path.removeEventListener(
//           "mouseenter",
//           selectState,
//         );
//         path.removeEventListener(
//           "focus",
//           selectState,
//         );
//         path.removeEventListener(
//           "click",
//           selectState,
//         );
//       });

//       /*
//        * Generate the marker at the actual state path's
//        * SVG bounding-box centre.
//        */
//       try {
//         const bounds = path.getBBox();

//         const markerX =
//           bounds.x + bounds.width / 2;

//         const markerY =
//           bounds.y + bounds.height / 2;

//         const markerGroup =
//           document.createElementNS(
//             SVG_NAMESPACE,
//             "g",
//           );

//         markerGroup.setAttribute(
//           "class",
//           "steelbuild-map-marker",
//         );

//         markerGroup.setAttribute(
//           "data-presence-id",
//           presenceState.id,
//         );

//         markerGroup.setAttribute(
//           "tabindex",
//           "0",
//         );

//         markerGroup.setAttribute(
//           "role",
//           "button",
//         );

//         markerGroup.setAttribute(
//           "aria-label",
//           `Select ${presenceState.state}`,
//         );

//         const outerGlow = createSvgCircle(
//           "marker-outer-glow",
//           markerX,
//           markerY,
//           13,
//         );

//         const pulse = createSvgCircle(
//           "marker-pulse",
//           markerX,
//           markerY,
//           9,
//         );

//         const whiteRing = createSvgCircle(
//           "marker-white-ring",
//           markerX,
//           markerY,
//           6.5,
//         );

//         const redCore = createSvgCircle(
//           "marker-red-core",
//           markerX,
//           markerY,
//           4,
//         );

//         markerGroup.append(
//           outerGlow,
//           pulse,
//           whiteRing,
//           redCore,
//         );

//         const markerSelectState = () => {
//           onStateChange(presenceState);
//         };

//         markerGroup.addEventListener(
//           "mouseenter",
//           markerSelectState,
//         );

//         markerGroup.addEventListener(
//           "focus",
//           markerSelectState,
//         );

//         markerGroup.addEventListener(
//           "click",
//           markerSelectState,
//         );

//         markerLayer.appendChild(markerGroup);

//         cleanups.push(() => {
//           markerGroup.removeEventListener(
//             "mouseenter",
//             markerSelectState,
//           );

//           markerGroup.removeEventListener(
//             "focus",
//             markerSelectState,
//           );

//           markerGroup.removeEventListener(
//             "click",
//             markerSelectState,
//           );
//         });
//       } catch (error) {
//         console.warn(
//           `Unable to position marker for ${presenceState.state}`,
//           error,
//         );
//       }
//     });

//     return () => {
//       cleanups.forEach((cleanup) => cleanup());
//       markerLayer.remove();
//     };
//   }, [
//     svgMarkup,
//     states,
//     stateLookup,
//     onStateChange,
//   ]);

//   /*
//    * Apply active-state styles whenever the selected
//    * region changes.
//    */
//   useEffect(() => {
//     const container = mapContainerRef.current;

//     if (!container) {
//       return;
//     }

//     const paths =
//       container.querySelectorAll<SVGPathElement>(
//         ".india-state-covered",
//       );

//     const markers =
//       container.querySelectorAll<SVGGElement>(
//         ".steelbuild-map-marker",
//       );

//     paths.forEach((path) => {
//       const isActive =
//         path.dataset.presenceId ===
//         activeState.id;

//       path.classList.toggle(
//         "india-state-active",
//         isActive,
//       );
//     });

//     markers.forEach((marker) => {
//       const isActive =
//         marker.dataset.presenceId ===
//         activeState.id;

//       marker.classList.toggle(
//         "marker-active",
//         isActive,
//       );
//     });
//   }, [activeState.id, svgMarkup]);

//   return (
//     <div className="relative mx-auto w-full max-w-[760px]">
//       <div className="pointer-events-none absolute left-1/2 top-1/2 h-[76%] w-[74%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-blue/[0.08] blur-[110px]" />

//       <div
//         ref={mapContainerRef}
//         className="india-presence-map relative z-10 aspect-[4/5] w-full"
//       >
//         {isLoading && (
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary-blue/15 border-t-primary-red" />
//           </div>
//         )}

//         {!isLoading && !svgMarkup && (
//           <div className="absolute inset-0 flex items-center justify-center rounded-[28px] border border-gray-200 bg-white">
//             <p className="text-sm font-bold text-gray-500">
//               India map could not be loaded.
//             </p>
//           </div>
//         )}

//         {svgMarkup && (
//           <div
//             className="h-full w-full"
//             dangerouslySetInnerHTML={{
//               __html: svgMarkup,
//             }}
//           />
//         )}
//       </div>

//       {/* Map legend */}

//       <div className="relative z-20 mx-auto mt-5 flex w-fit flex-wrap items-center justify-center gap-x-6 gap-y-3 rounded-2xl border border-gray-200 bg-white/90 px-5 py-3 shadow-[0_14px_38px_rgba(27,63,104,0.09)] backdrop-blur-md">
//         <div className="flex items-center gap-2">
//           <span className="h-3 w-3 rounded-full border-2 border-white bg-primary-red shadow-[0_3px_10px_rgba(194,17,25,0.35)]" />

//           <span className="text-[11px] font-black text-primary-blue">
//             Project Presence
//           </span>
//         </div>

//         <div className="flex items-center gap-2">
//           <span className="h-3 w-3 rounded-sm bg-primary-blue" />

//           <span className="text-[11px] font-black text-primary-blue">
//             Active State
//           </span>
//         </div>

//         <div className="flex items-center gap-2">
//           <span className="h-3 w-3 rounded-sm bg-[#9fc5f4]" />

//           <span className="text-[11px] font-black text-primary-blue">
//             Covered State
//           </span>
//         </div>
//       </div>

//       <style jsx global>{`
//         .india-presence-map > div {
//           height: 100%;
//           width: 100%;
//         }

//         .india-presence-map svg {
//           display: block;
//           height: 100%;
//           width: 100%;
//           overflow: visible;
//           filter: drop-shadow(
//             0 24px 38px rgba(27, 63, 104, 0.16)
//           );
//         }

//         /*
//          * Base map state
//          */

//         .india-presence-map
//           .india-state-path {
//           fill: #d7e7f7 !important;
//           stroke: #ffffff !important;
//           stroke-width: 0.85 !important;
//           stroke-linejoin: round;
//           vector-effect: non-scaling-stroke;
//           transition:
//             fill 280ms ease,
//             filter 280ms ease,
//             opacity 280ms ease;
//           outline: none;
//         }

//         /*
//          * States not included in the declared presence list.
//          */

//         .india-presence-map
//           .india-state-not-covered {
//           fill: #e7f0f9 !important;
//           opacity: 0.88;
//         }

//         /*
//          * Covered state default colour.
//          */

//         .india-presence-map
//           .india-state-covered {
//           fill: #9fc5f4 !important;
//           cursor: pointer;
//         }

//         /*
//          * Hover and keyboard focus colour.
//          */

//         .india-presence-map
//           .india-state-covered:hover,
//         .india-presence-map
//           .india-state-covered:focus {
//           fill: #397bd8 !important;
//           filter: drop-shadow(
//             0 0 7px rgba(57, 123, 216, 0.45)
//           );
//         }

//         /*
//          * Current selected state.
//          */

//         .india-presence-map
//           .india-state-active,
//         .india-presence-map
//           .india-state-active:hover,
//         .india-presence-map
//           .india-state-active:focus {
//           fill: #1b3f68 !important;
//           filter: drop-shadow(
//             0 0 9px rgba(27, 63, 104, 0.55)
//           );
//         }

//         /*
//          * Marker layer
//          */

//         .india-presence-map
//           .steelbuild-map-marker {
//           cursor: pointer;
//           outline: none;
//           transform-box: fill-box;
//           transform-origin: center;
//           transition: transform 260ms ease;
//         }

//         .india-presence-map
//           .steelbuild-map-marker:hover,
//         .india-presence-map
//           .steelbuild-map-marker:focus,
//         .india-presence-map
//           .steelbuild-map-marker.marker-active {
//           transform: scale(1.18);
//         }

//         .india-presence-map
//           .marker-outer-glow {
//           fill: rgba(194, 17, 25, 0.14);
//         }

//         .india-presence-map
//           .marker-pulse {
//           fill: rgba(194, 17, 25, 0.2);
//           transform-box: fill-box;
//           transform-origin: center;
//           animation: steelbuild-marker-pulse
//             2.2s ease-out infinite;
//         }

//         .india-presence-map
//           .marker-white-ring {
//           fill: #ffffff;
//           stroke: rgba(194, 17, 25, 0.16);
//           stroke-width: 1;
//         }

//         .india-presence-map
//           .marker-red-core {
//           fill: #c21119;
//           filter: drop-shadow(
//             0 2px 5px rgba(194, 17, 25, 0.45)
//           );
//         }

//         .india-presence-map
//           .marker-active
//           .marker-outer-glow {
//           fill: rgba(194, 17, 25, 0.28);
//         }

//         .india-presence-map
//           .marker-active
//           .marker-red-core {
//           fill: #e0151e;
//         }

//         @keyframes steelbuild-marker-pulse {
//           0% {
//             opacity: 0.85;
//             transform: scale(0.65);
//           }

//           70% {
//             opacity: 0;
//             transform: scale(1.75);
//           }

//           100% {
//             opacity: 0;
//             transform: scale(1.75);
//           }
//         }

//         @media (prefers-reduced-motion: reduce) {
//           .india-presence-map
//             .marker-pulse {
//             animation: none;
//           }

//           .india-presence-map
//             .india-state-path,
//           .india-presence-map
//             .steelbuild-map-marker {
//             transition: none;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }