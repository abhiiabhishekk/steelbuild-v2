// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { AnimatePresence, motion } from "framer-motion";
// import {
//   ArrowUpRight,
//   BadgeCheck,
//   Building2,
//   Factory,
//   Globe2,
//   MapPinned,
//   ShieldCheck,
// } from "lucide-react";

// import Container from "@/components/layout/Container";

// import {
//   statePresence,
//   type StatePresence,
// } from "@/data/projectPresence";

// import IndiaPresenceMap from "./IndiaPresenceMap";
// import InternationalPresence from "./InternationalPresence";

// const presenceHighlights = [
//   {
//     icon: MapPinned,
//     value: "20",
//     label: "Indian States",
//   },
//   {
//     icon: Globe2,
//     value: "4",
//     label: "International Markets",
//   },
//   {
//     icon: Factory,
//     value: "Integrated",
//     label: "Manufacturing Support",
//   },
//   {
//     icon: ShieldCheck,
//     value: "End-to-End",
//     label: "Project Delivery",
//   },
// ];

// export default function IndiaProjectPresence() {
//   const [activeState, setActiveState] =
//     useState<StatePresence>(statePresence[4]);

//   return (
//     <section className="relative isolate overflow-hidden bg-white py-24 lg:py-32">
//       {/* Premium white blueprint background */}

//       <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.022)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.022)_1px,transparent_1px)] bg-[size:72px_72px]" />

//       <div className="pointer-events-none absolute -left-48 top-24 h-[480px] w-[480px] rounded-full bg-primary-red/[0.055] blur-[120px]" />

//       <div className="pointer-events-none absolute -right-48 bottom-24 h-[520px] w-[520px] rounded-full bg-primary-blue/[0.07] blur-[130px]" />

//       <Container>
//         {/* Heading */}

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true, margin: "-80px" }}
//           transition={{ duration: 0.65 }}
//           className="relative z-10 mx-auto max-w-4xl text-center"
//         >
//           <span className="inline-flex items-center gap-2 rounded-full bg-primary-red/10 px-6 py-2.5 text-[11px] font-black uppercase tracking-[0.3em] text-primary-red">
//             <MapPinned size={16} />
//             Project Presence
//           </span>

//           <h2 className="mt-7 text-4xl font-black leading-[1.03] tracking-[-0.045em] text-primary-blue md:text-5xl lg:text-[62px]">
//             Engineering Excellence
//             <span className="block">
//               Across India and Beyond.
//             </span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-3xl text-lg font-medium leading-8 text-gray-600">
//             Steelbuild supports industrial development through integrated
//             engineering, controlled manufacturing, coordinated supply and
//             dependable project execution across India and selected
//             international markets.
//           </p>
//         </motion.div>

//         {/* Main section */}

//         <div className="relative z-10 mt-16 grid gap-10 xl:grid-cols-[1.18fr_0.82fr] xl:items-start">
//           {/* Large map panel */}

//           <motion.div
//             initial={{ opacity: 0, x: -35 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.72 }}
//             className="relative isolate overflow-hidden rounded-[40px] border border-gray-200 bg-gradient-to-br from-[#f9fbfe] via-white to-[#edf5fc] p-6 shadow-[0_35px_100px_rgba(27,63,104,0.12)] md:p-9"
//           >
//             <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(27,63,104,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(27,63,104,0.025)_1px,transparent_1px)] bg-[size:56px_56px]" />

//             <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
//               <div>
//                 <p className="text-[10px] font-black uppercase tracking-[0.26em] text-primary-red">
//                   Steelbuild Project Network
//                 </p>

//                 <h3 className="mt-2 text-2xl font-black text-primary-blue md:text-3xl">
//                   State-Wise Presence Across India
//                 </h3>
//               </div>

//               <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-primary-blue text-white shadow-[0_12px_32px_rgba(27,63,104,0.2)]">
//                 <MapPinned size={24} />
//               </div>
//             </div>

//             <div className="relative z-10 mt-4">
//               <IndiaPresenceMap
//                 states={statePresence}
//                 activeState={activeState}
//                 onStateChange={setActiveState}
//               />
//             </div>

//             <div className="relative z-10 mt-3 flex items-start gap-3 rounded-[20px] border border-primary-blue/10 bg-white/80 px-5 py-4 shadow-sm backdrop-blur-md">
//               <BadgeCheck
//                 size={18}
//                 className="mt-0.5 shrink-0 text-primary-red"
//               />

//               <p className="text-xs font-semibold leading-6 text-gray-500">
//                 Hover over a location marker on desktop or tap a marker on
//                 mobile to explore Steelbuild&apos;s regional presence.
//               </p>
//             </div>
//           </motion.div>

//           {/* Information column */}

//           <motion.div
//             initial={{ opacity: 0, x: 35 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true, margin: "-80px" }}
//             transition={{ duration: 0.72 }}
//             className="space-y-8"
//           >
//             {/* Active state information */}

//             <div className="overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-[0_28px_85px_rgba(27,63,104,0.11)]">
//               <div className="relative overflow-hidden bg-primary-blue px-7 py-8">
//                 <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_55%,#12345b_100%)]" />

//                 <div className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-primary-red/22 blur-[80px]" />

//                 <div className="relative z-10">
//                   <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[9px] font-black uppercase tracking-[0.2em] text-white/80">
//                     Selected Region
//                   </span>

//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={activeState.id}
//                       initial={{
//                         opacity: 0,
//                         y: 15,
//                       }}
//                       animate={{
//                         opacity: 1,
//                         y: 0,
//                       }}
//                       exit={{
//                         opacity: 0,
//                         y: -10,
//                       }}
//                       transition={{ duration: 0.28 }}
//                     >
//                       <p className="mt-7 text-[10px] font-black uppercase tracking-[0.25em] text-primary-red">
//                         {activeState.region}
//                       </p>

//                       <h3 className="mt-3 text-3xl font-black leading-tight tracking-[-0.035em] text-white md:text-4xl">
//                         {activeState.state}
//                       </h3>

//                       <p className="mt-5 text-sm font-medium leading-7 text-white/68">
//                         {activeState.description}
//                       </p>
//                     </motion.div>
//                   </AnimatePresence>
//                 </div>
//               </div>

//               <div className="p-7">
//                 <p className="text-[10px] font-black uppercase tracking-[0.22em] text-gray-400">
//                   Regional Capabilities
//                 </p>

//                 <AnimatePresence mode="wait">
//                   <motion.div
//                     key={`${activeState.id}-capabilities`}
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     exit={{ opacity: 0 }}
//                     transition={{ duration: 0.25 }}
//                     className="mt-5 flex flex-wrap gap-3"
//                   >
//                     {activeState.capabilities.map((capability) => (
//                       <span
//                         key={capability}
//                         className="inline-flex items-center gap-2 rounded-full border border-primary-blue/10 bg-[#f7f9fc] px-4 py-2.5 text-xs font-black text-primary-blue"
//                       >
//                         <BadgeCheck
//                           size={14}
//                           className="text-primary-red"
//                         />

//                         {capability}
//                       </span>
//                     ))}
//                   </motion.div>
//                 </AnimatePresence>

//                 <div className="mt-7 border-t border-gray-100 pt-6">
//                   <p className="text-sm font-semibold leading-7 text-gray-500">
//                     Steelbuild&apos;s presence represents engineering,
//                     manufacturing, supply and project-delivery capabilities
//                     supporting industrial requirements across the region.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             <InternationalPresence />
//           </motion.div>
//         </div>

//         {/* Non-repetitive presence highlights */}

//         <motion.div
//           initial={{ opacity: 0, y: 28 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="relative z-10 mt-10 grid overflow-hidden rounded-[30px] border border-gray-200 bg-white shadow-[0_24px_75px_rgba(27,63,104,0.09)] sm:grid-cols-2 xl:grid-cols-4"
//         >
//           {presenceHighlights.map((item, index) => {
//             const Icon = item.icon;

//             return (
//               <article
//                 key={item.label}
//                 className={`group flex items-center gap-4 p-6 transition-colors duration-300 hover:bg-[#f8fafc] ${
//                   index < presenceHighlights.length - 1
//                     ? "border-b border-gray-200 sm:border-r xl:border-b-0"
//                     : ""
//                 } ${
//                   index === 1
//                     ? "sm:border-r-0 xl:border-r"
//                     : ""
//                 }`}
//               >
//                 <div className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-primary-red/10 text-primary-red transition-all duration-300 group-hover:bg-primary-red group-hover:text-white">
//                   <Icon size={23} />
//                 </div>

//                 <div>
//                   <p className="text-xl font-black tracking-[-0.025em] text-primary-blue">
//                     {item.value}
//                   </p>

//                   <p className="mt-1 text-xs font-bold text-gray-500">
//                     {item.label}
//                   </p>
//                 </div>
//               </article>
//             );
//           })}
//         </motion.div>

//         {/* CTA */}

//         <motion.div
//           initial={{ opacity: 0, y: 24 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.55 }}
//           className="relative z-10 mt-10 flex flex-col items-start justify-between gap-6 overflow-hidden rounded-[30px] bg-primary-blue p-8 shadow-[0_28px_85px_rgba(27,63,104,0.18)] md:flex-row md:items-center md:p-10"
//         >
//           <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(135deg,#153b68_0%,#23578d_55%,#12345b_100%)]" />

//           <div className="relative z-10 flex items-start gap-4">
//             <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-primary-red text-white">
//               <Building2 size={26} />
//             </div>

//             <div>
//               <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary-red">
//                 Explore Our Work
//               </p>

//               <h3 className="mt-2 text-2xl font-black text-white">
//                 Discover Steelbuild Projects Across Multiple Industries
//               </h3>
//             </div>
//           </div>

//           <Link
//             href="/projects"
//             className="group relative z-10 inline-flex min-h-[56px] shrink-0 items-center justify-center gap-3 rounded-2xl bg-primary-red px-7 py-4 font-black !text-white shadow-[0_18px_42px_rgba(194,17,25,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:!text-primary-blue"
//           >
//             Explore Our Projects

//             <ArrowUpRight
//               size={19}
//               className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
//             />
//           </Link>
//         </motion.div>
//       </Container>
//     </section>
//   );
// }