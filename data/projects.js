window.PROJECTS = [
{
  title: "Science Opportunities of Wet Extreme Mass-Ratio Inspirals",
  meta: "Multi-messenger gravitational waves • Phys. Rev. D (2026)",
  summary:
    "Reviews the multi-messenger science enabled by “wet EMRIs” (stellar-mass BHs inspiraling into SMBHs inside AGN disks), emphasizing population forecasts, transient EM counterparts (type II QPEs), precision SMBH parameter calibration, jet/disk geometry tests, and bright/dark-siren cosmology.",
  details: [
    "Context: Wet EMRIs form via disk capture + migration in gas-rich AGN environments, unlike dry EMRIs formed by scattering in nuclear star clusters. Disk interactions tend to circularize and align orbits, while also opening EM counterpart channels.",
    "Population & detectability: Re-estimates wet-EMRI rates using an updated (TDE-informed) SMBH mass function and a conservative constant AGN fraction \\(f_\\mathrm{AGN}=1\\%\\). Forecasts (Table I) give total rates \\(\\sim 4\\times10^2\\text{–}3.5\\times10^3\\,\\mathrm{yr}^{-1}\\) and LISA detection rates \\(\\sim 8\\text{–}100\\,\\mathrm{yr}^{-1}\\) (SNR \\(\\ge 20\\)), depending on disk model and disk lifetime; a nontrivial subset have resolvable host AGNs.",
    "Waveforms & inference: Uses the Augmented Analytic Kludge (AAK) EMRI waveform model via Fast EMRI Waveforms (FEW) and performs Fisher-matrix forecasts in a 14D parameter space. Typical wet-EMRI measurements reach extremely high precision in SMBH mass/spin (order \\(10^{-4}\\text{–}10^{-6}\\) as highlighted in the introduction; see also the uncertainty histograms).",
    "Transient EM counterparts (type II QPEs): Proposes QPE-like X-ray transients produced when an sBH crosses a warped AGN disk twice per orbit (distinct from TDE-associated “type I QPEs”). A decoupling radius \\(r_\\mathrm{dec}\\) is estimated by equating Lense–Thirring precession with disk-alignment rates; inside \\(r_\\mathrm{dec}\\) disk-crossing collisions can generate quasi-periodic flares with energy per collision scaling with the disk surface density \\(\\Sigma\\). The different \\(\\Sigma(r)\\) scalings in \\(\\alpha\\)- vs \\(\\beta\\)-disk models imply measurably different flare energetics, offering a disk-model diagnostic.",
    "Calibrating EM measurements of SMBHs: If the host AGN is identified, wet EMRIs can calibrate traditional EM-based SMBH mass and spin estimators (e.g., virial BLR masses; X-ray reflection spectroscopy spins), because GW-derived SMBH parameters are far more precise than current EM constraints. The paper discusses detectability of the necessary X-ray fluxes and the need for deep exposures with next-gen missions (e.g., Athena/eXTP).",
    "Testing jet-launching models: Outlines how joint GW (SMBH spin axis and EMRI orbital geometry) + EM (jet direction from radio) can test whether jets align with SMBH spin (BZ-like) versus disk angular momentum (BP-like), while noting practical limitations from growing uncertainty in the disk azimuth/precession angle when propagating the orbit to larger radii.",
    "Cosmology with bright and dark sirens: Wet EMRIs can be bright sirens when the localization volume contains \\(\\lesssim 1\\) candidate AGN host (enabled primarily at \\(z\\lesssim 0.3\\)), and dark sirens otherwise via statistical association with AGN catalogs. Forecasts show \\(\\sim 1\\%\\) precision on \\(H_0\\) with \\(\\mathcal{O}(7)\\) bright sirens, and \\(\\sim 3\\%\\) precision from \\(\\mathcal{O}(30)\\) dark sirens in an example model; restricting hosts to AGNs (rather than all galaxies) substantially reduces candidate counts and tightens constraints."
  ],
  figures: [
    {
      src: "data/images/wet_emri_rate.png",
      alt: "Forecasted rates for stellar-mass black hole (sBH) EMRIs.",
      caption: "The table presents total EMRI rates, LISA detection rates (with \\(\\mathrm{SNR} \\ge 20\\)), and rates for which the host AGN galaxy is resolvable.",
      layout: "below"  
    },

    {
      src: "data/images/wet_EMRI_bright_dH_H_Num.png",
      alt: "Relative 1-\\(\\sigma\\) uncertainty on \\(H_0\\) versus number of bright wet-EMRI sirens for representative disk models.",
      caption:
        "Forecast \\(\\Delta H_0/H_0\\) versus the number of bright wet-EMRI sirens. The uncertainty decreases with sample size and reaches \\(\\sim 1\\%\\) with \\(\\mathcal{O}(7)\\) bright sirens in representative models."
    }
  ],
  tags: [
    "Wet EMRIs",
    "AGN Disks",
    "Multi-messenger Astronomy",
    "Quasi-Periodic Eruptions (QPEs)",
    "Standard Sirens"
  ],
  links: [
    { label: "Paper (arXiv:2501.03252)", href: "https://arxiv.org/abs/2501.03252" },
    { label: "Code on GitHub", href: "https://github.com/gwlyu" }
  ]
},



{
  title: "Probing Spin-Induced Quadrupole Moments in Precessing Compact Binaries",
  meta: "Waveform model • Phys. Rev. D (2024)",
  summary:
    "Develops and applies a precessing inspiral–merger–ringdown waveform that includes spin-induced quadrupole-moment effects in both the aligned-spin phase and the spin-precession dynamics, showing that precession can substantially improve measurability of the spin-induced quadrupole moment and help distinguish mass-gap objects and black-hole mimickers.",
  details: [
    "Goal: Use gravitational-wave data to probe the spin-induced quadrupole moment (SIQM), parameterized by \\(Q = -\\kappa\\,\\chi^2 m^3\\), where \\(\\kappa=1\\) for GR black holes and typically \\(\\kappa>1\\) for neutron stars / exotic compact objects. Emphasis: identifying the nature of mass-gap objects (e.g., GW190814-like) when tidal deformability or EM counterparts are uninformative.",
    "Key idea: SIQM affects waveforms through (i) aligned-spin-induced (AI) phase corrections starting at 2PN and (ii) precession-induced (PI) modifications to spin/orbital precession. The paper argues PI can be a more sensitive handle on \\(\\kappa\\) than AI for significantly precessing systems.",
    "Waveform/modeling: Modifies IMRPhenomXPHM to allow generic \\(\\kappa\\) in both AI and PI sectors. Uses the MSA-based precession mapping and includes higher harmonics (keeps \\((\\ell,m)=(2,2),(2,1),(3,3)\\) to reduce cost). Optionally includes horizon absorption (HA) phase terms (2.5PN/3.5PN for spinning BHs). Tidal deformability is omitted by design for mass-gap objects (expected small at \\(\\sim 2.6\\,M_\\odot\\)).",
    "Mismatch study: For four representative mass-gap binary classes (C1–C4), computes the CDF of waveform mismatch between a BH assumption (\\(\\kappa=1\\)) and models where SIQM/HA effects are toggled. HA produces the smallest mismatch; AI is typically largest, but PI dominates the mismatch budget for a nontrivial fraction of random spin-orientation draws (\\(>50\\%\\) PI contribution for \\(\\sim 31\\%, 23\\%, 21\\%, 14\\%\\) of samples in C1–C4, respectively).",
    "Parameter estimation: Bayesian inference with MCMC (LALSuite + PyCBC with modifications), using a low-frequency cutoff \\(f_\\mathrm{low}=20\\,\\mathrm{Hz}\\). Injection distance fixed to \\(d_L=200\\,\\mathrm{Mpc}\\). Studies two detector networks: a five-detector A\\# network (post-O5-like) and a three-detector Cosmic Explorer (CE) network.",
    "Core result (why precession matters): Demonstrates that AI-only models suffer strong degeneracies between \\(\\kappa\\) and spin parameters in aligned-spin waveforms, while PI effects in precessing waveforms break these degeneracies and can tighten constraints on \\(\\kappa\\) even when AI and PI contribute similar mismatch.",
    "Illustrative constraints for a GW190814-like (C2) setup: with an A\\# network, \\(\\kappa\\) for the \\(2.6\\,M_\\odot\\) object is only marginally constrained (reported 90% upper limit around \\(\\kappa\\approx 3.9\\) and uncertainty \\(\\sim 2\\)); with a CE network the same setup yields a much sharper measurement \\(\\kappa_2 = 1.95^{+0.13}_{-0.21}\\), enabling decisive discrimination between BH-like and NS/exotic values if the object is rapidly spinning.",
    "BH mimickers application: Re-analyzes selected GWTC events and injections using a common-quadrupole parameterization \\(\\kappa_1=\\kappa_2\\) and \\(\\delta\\kappa_s = (\\kappa_1+\\kappa_2)/2 - 1\\). Finds PI effects provide modest improvements for mildly precessing catalog events, but can significantly tighten \\(\\delta\\kappa_s\\) constraints for injected O4-like loud, precessing systems."
  ],
  figures: [
    {
      src: "data/images/SIQM_corner_C2.png",
      alt: " ",
      caption:
       "Posterior distribution of SIQM \\(\\kappa_2\\), \\(\\chi_1\\) and \\(\\chi_2\\) with A\\(^\\#\\) and CE networks, respectively. Here the range of values above the marginalized distributions are given within a \\(90\\%\\) confidence interval."
    },
    {
      src: "data/images/SIQM_violin.jpg",
      alt: "",
      caption:
        "Violin plot for \\(\\kappa\\) of the \\(2.6\\, M_\\odot\\) object for the four cases. The violin has been split into two parts: green (left) and orange (right) present constraints from the A\\(^\\#\\) and CE networks. Each half violin has the same area and the horizontal lines show \\(1\\,\\sigma\\) uncertainty bounds."
    },
  ],
  tags: [
    "Spin Precession",
    "Spin-Induced Quadrupole Moment",
    "Mass Gap Objects",
    "Black Hole Mimickers",
  ],
  links: [
    { label: "Paper (arXiv:2308.09032)", href: "https://arxiv.org/abs/2308.09032" },
    { label: "Code on GitHub", href: "https://github.com/GWLyu/SIQM" },
  ]
},




{
  title: "Constraints on Einstein–dilaton Gauss–Bonnet Gravity from NSBH Gravitational-Wave Events",
  meta: "Modified theory of gravity • Phys. Rev. D (2022)",
  summary:
    "Uses neutron star–black hole gravitational-wave events to bound the EdGB coupling via post-Newtonian phase corrections and Bayesian inference.",
  details: [
    "Goal: Test strong-field gravity beyond GR by constraining the EdGB coupling \\(\\sqrt{\\alpha_\\mathrm{GB}}\\) using NSBH (and select BBH) events.",
    "Method: Add EdGB inspiral phase corrections (leading −1PN dipole term; extended up to 2PN via mapping from scalar–tensor waveforms) to a GR baseline waveform and run Bayesian MCMC (with a Fisher analysis cross-check).",
    "Data: GW200105 and GW200115 (NSBH); GW190814 treated under both NSBH and BBH interpretations; comparison/stacking with selected BBH bounds from prior work.",
    "Key results (90% credible): \\(\\sqrt{\\alpha_\\mathrm{GB}} \\lesssim 1.33\\,\\text{km}\\) from GW200115; stacked bound \\(\\sqrt{\\alpha_\\mathrm{GB}} \\lesssim 1.18\\,\\text{km}\\). Including higher-PN terms tightens bounds by ~14.5% (GW200105) and ~6.9% (GW200115).",
    "Validity check: Bounds are verified to satisfy the small-coupling approximation; Fisher and Bayesian constraints agree to within an \\(\\mathcal{O}(1)\\) factor.",
    "Erratum note: Corrects specific PN coefficients (A(8), A(10–12)) only in \\(s_1 s_2\\) terms; NSBH results/figures are unchanged because the NS scalar charge is negligible (so those terms vanish)."
  ],
  figures: [
    {
      src: "data/images/EdGB_alpha_km_combined.jpg",
      alt: "Posterior distributions and 90% upper limits on sqrt(alpha_GB) from NSBH events and combined analyses.",
      caption: "Posterior probability distributions for \\(\\sqrt{\\alpha_\\mathrm{GB}}\\) from selected GW events. We also show an upper bound on \\(\\sqrt{\\alpha_\\mathrm{GB}}\\) at \\(90\\%\\) credible level for each event as vertical lines, which indicates the result is consistent with GR. The posteriors are found by including only the leading EdGB correction to the phase at \\(-1\\)PN order."
    },
    {
      src: "data/images/EdGB_alpha_km_high.jpg",
      alt: "90% credible bounds on sqrt(alpha_GB) from the leading \\(-1\\)PN correction and those including higher PN corrections (up to 2PN).",
      caption: "A comparison of the posteriors on \\(\\sqrt{\\alpha_\\mathrm{GB}}\\) from the leading \\(-1\\)PN correction and those including higher PN corrections (up to 2PN) for GW200105 (top) and GW200115 (bottom). Observe that the \\(90\\%\\) upper bounds on \\(\\sqrt{\\alpha_\\mathrm{GB}}\\) are improved by \\(14.5\\%\\) for GW200105 and \\(6.9\\%\\) for GW200115, respectively."
    }
  ],
  tags: ["Gravitational Waves", "Modified Gravity", "EdGB", "NSBH", "Bayesian Inference", "Post-Newtonian"],
  links: [
    { label: "Paper (arXiv:2201.02543)", href: "https://arxiv.org/abs/2201.02543" },
    { label: "Code on GitHub", href: "https://github.com/gwlyu" }
  ]
},





  {
    title: "Project A: Efficient Model Training",
    meta: "2024 — Present",
    summary: "Optimization methods for training and evaluation.",
    details: [
      "Goal: Reduce training cost while keeping accuracy.",
      "My role: algorithm design + implementation + experiments.",
      "Output: manuscript in preparation; internal benchmark suite."
    ],
    figures: [
      {
        src: "data/images/avatar.jpg",
        alt: "Overview diagram of Project A",
        caption: "Overview of the pipeline."
      },
      {
        src: "data/images/avatar.jpg",
        alt: "Results plot for Project A",
        caption: "Main benchmark results."
      }
    ],
    tags: ["ML", "Optimization", "Systems"],
    links: [
    { label: "Paper (arXiv:2201.02543)", href: "https://arxiv.org/abs/2201.02543" },
    { label: "Code", href: "https://github.com/gwlyu"},
      { label: "Paper (PDF)", href: "#" },
      { label: "Code", href: "#" }
    ]
  },



];
