window.PROJECTS = [
{
  title: "EMRIs in AGN Disks: Formation Channels, Rates, Detectability, and Multi-messenger Science",
  meta: "EMRIs • Phys. Rev. D (2021 - 2026)",
  summary:
    "Active galactic nucleus (AGN) disks provide an efficient formation channel for extreme mass-ratio inspirals (EMRIs) observable by spaceborne gravitational-wave detectors. In this channel, compact objects are captured onto the disk, their orbital eccentricities and inclinations are damped by disk interactions, and they subsequently migrate inward until gravitational-wave emission becomes dominant, substantially enhancing the EMRI formation rate relative to the canonical loss-cone channel. Together, these works are organized around three closely related questions: how are wet EMRIs formed in AGN disks; why can this channel substantially enhance the observable EMRI population, including mass-gap EMRIs; and what broader astrophysical and cosmological applications can wet EMRIs enable?",
  details_md: [
    "- **Formation channel:** Dry EMRIs form through loss-cone scattering in nuclear star clusters and typically retain nonzero eccentricity in band. Wet EMRIs form when compact objects are captured by AGN disks; disk-induced damping and migration drive them into the GW-dominated regime, producing nearly circular, disk-aligned EMRIs. This makes eccentricity a practical discriminator between wet and dry channels.",
    "- **Rate enhancement:** Fokker–Planck calculations including disk interactions show that AGN disks can increase the EMRI formation rate per massive black hole by **\\(\\mathcal{O}(10^1\\text{–}10^3)\\)** relative to the dry channel, making wet EMRIs an important and potentially dominant contribution to the observable EMRI population.",
    "- **Detectability:** For mass-gap objects, the wet-channel LISA rate is **\\(\\mathcal{O}(10\\text{–}10^2)\\times (f_{\\rm AGN}/1\\%)\\,\\mathrm{yr}^{-1}\\)**, compared with **\\(\\lesssim 1\\,\\mathrm{yr}^{-1}\\)** for dry mass-gap EMRIs. For stellar-mass black-hole wet EMRIs, representative models give LISA detection rates of **\\(\\sim 8\\text{–}100\\,\\mathrm{yr}^{-1}\\)**, depending on the disk model and lifetime.",
    "- **Multi-messenger potential:** Because wet EMRIs are associated with AGNs, some events may have identifiable hosts. This enables SMBH mass/spin calibration, jet/disk geometry tests, and standard-siren cosmology. Representative forecasts reach **\\(\\sim 1\\%\\)** precision on \\(H_0\\) with **\\(\\mathcal{O}(7)\\)** bright sirens, and **\\(\\sim 3\\%\\)** with **\\(\\mathcal{O}(30)\\)** dark sirens.",
    "- **Broader significance:** Wet EMRIs connect gravitational-wave observations with AGN accretion physics, compact-object populations, and cosmology, making them one of the most astrophysically informative EMRI channels."
  ],

  figures: [
    {
      src: "data/images/wet_EMRI_rate.png",
      alt: "Forecasted rates for stellar-mass black hole EMRIs.",
      caption: "Representative forecasts for total EMRI rates, LISA detection rates, and the subset with resolvable AGN hosts.",
      layout: "below"
    },
    {
      src: "data/images/wet_EMRI_bright_dH_H_Num.png",
      alt: "Relative uncertainty on H0 versus number of bright wet-EMRI sirens.",
      caption: "Forecast \\(\\Delta H_0/H_0\\) from bright wet-EMRI standard sirens; the uncertainty reaches the percent level with a modest sample of host-identified events."
    }
  ],

  tags: [
    "Wet EMRIs",
    "AGN Disks",
    "Formation Channels",
    "Fokker–Planck Modeling",
    "Mass-gap Objects",
    "Multi-messenger Astrophysics",
    "Standard Sirens",
    "LISA / TianQin / Taiji"
  ],

  links: [
    { label: "Formation Rate of Extreme Mass Ratio Inspirals in Active Galactic Nuclei (arXiv:2101.09146)", href: "https://arxiv.org/abs/2101.09146" },
    { label: "Wet Extreme Mass Ratio Inspirals May Be More Common For Spaceborne Gravitational Wave Detection (arXiv:2104.01208)", href: "https://arxiv.org/abs/2104.01208" },
    { label: "Mass-gap extreme mass ratio inspirals (arXiv:2112.10237)", href: "https://arxiv.org/abs/2112.10237" },
    { label: "Science Opportunities of Wet Extreme Mass-Ratio Inspirals (arXiv:2501.03252)", href: "https://arxiv.org/abs/2501.03252" },
    { label: "Probing Formation Channels of Extreme Mass-Ratio Inspirals (arXiv:2509.00469)", href: "https://arxiv.org/abs/2509.00469" },
    { label: "Code on GitHub", href: "https://github.com/gwlyu/wet_EMRIs" }
  ]

},



{
  title: "Probing Spin-Induced Quadrupole Moments in Precessing Compact Binaries",
  meta: "Waveform Model • Phys. Rev. D (2023, 2024)",

  summary:
    "Spin-induced quadrupole moments (SIQMs) provide a direct gravitational-wave probe of the internal structure of compact objects, distinguishing black holes (\\(\\kappa=1\\)) from neutron stars and black-hole mimickers (\\(\\kappa>1\\)). We develop fully precessing inspiral–merger–ringdown waveforms that incorporate SIQM effects in both aligned-spin phasing and spin-precession dynamics, enabling robust inference of \\(\\kappa\\) from gravitational-wave observations.",

  details_md: [
    "- **Physical effect:** SIQMs enter the waveform through (i) aligned-spin-induced (AI) phase corrections at 2PN order and (ii) precession-induced (PI) modifications to spin and orbital dynamics. While AI dominates in aligned configurations, PI provides a qualitatively distinct handle in precessing systems.",
    
    "- **Key insight:** Precession breaks the degeneracy between \\(\\kappa\\) and spin parameters present in aligned-spin waveforms. As a result, PI effects can dominate the information content even when their contribution to the total mismatch is comparable to AI.",
    
    "- **Quantitative behavior:** In representative mass-gap systems, PI contributions exceed 50% of the total mismatch for \\(\\sim 30\\%\\) of configurations, demonstrating that precession is a primary driver of SIQM measurability in realistic binaries.",
    
    "- **Waveform modeling:** We extend IMRPhenomXPHM to include generic \\(\\kappa\\) in both AI and PI sectors, incorporating higher harmonics and MSA-based precession dynamics. The model enables consistent parameter estimation for precessing binaries beyond the aligned-spin approximation.",
    
    "- **Parameter constraints:** For a GW190814-like system, current detector networks yield weak constraints (\\(\\kappa \\lesssim 4\\) at 90% confidence), whereas third-generation detectors such as Cosmic Explorer achieve precise measurements, e.g. \\(\\kappa = 1.95^{+0.13}_{-0.21}\\), enabling decisive discrimination between black holes and alternative compact objects."
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
    { label: "Efficient fully precessing gravitational waveforms for binaries with neutron stars (arXiv:2308.09032)", href: "https://arxiv.org/abs/2212.04657" },
    { label: "Probing Spin-Induced Quadrupole Moments in Precessing Compact Binaries (arXiv:2308.09032)", href: "https://arxiv.org/abs/2308.09032" },
    { label: "Code on GitHub", href: "https://github.com/GWLyu/SIQM" },
  ]
},



{
  title: "Test Beyond-GR/SM Physics with Real Detections",
  meta: "New-Physics • Phys.Rev.Lett. (2021), Phys. Rev. D (2022, 2025)",

  summary:
    "These works use gravitational-wave observations to test concrete extensions of general relativity and the Standard Model by embedding theory-specific corrections into waveform models and constraining the underlying parameters with Bayesian inference on real LIGO/Virgo events. The results are consistent with the baseline GR framework, while providing quantitatively competitive bounds on axionlike particles, Einstein–dilaton–Gauss–Bonnet gravity, noncommutative spacetime, and possible violations of the strong equivalence principle.",
  details_md: [
      "- **Common strategy:** Each study follows a theory-to-waveform-to-posterior program: derive a well-defined correction to compact-binary dynamics or GW propagation, incorporate it into a GR waveform family, and constrain the corresponding theory parameters with Bayesian inference on real events. The constraining power is primarily set by the PN order and by degeneracy breaking through source properties or multimessenger information.",
    "- **Axionlike particles from GW170817:** Finite-density effects in neutron stars can induce effective axion charges, leading to a Yukawa interaction and axion radiation. Using a modified TaylorF2 waveform and EM-informed priors, the analysis excludes, for very light axions \\((m_a \\lesssim 10^{-11}\\,\\mathrm{eV})\\), an approximate band \\(1.6\\times10^{16}\\,\\mathrm{GeV} \\lesssim f_a \\lesssim 10^{18}\\,\\mathrm{GeV}\\) at about \\(3\\sigma\\).",
    "- **Einstein–dilaton–Gauss–Bonnet gravity from NSBH events:** Scalar charges in EdGB gravity generate dipole radiation entering at **\\(-1\\)PN order**, giving strong constraints from inspiral signals. Bayesian analyses of GW200105 and GW200115 yield a **90%** bound \\(\\sqrt{\\alpha_{\\mathrm{GB}}} \\lesssim 1.33\\,\\mathrm{km}\\), tightened to \\(\\lesssim 1.18\\,\\mathrm{km}\\) in combined analyses, with higher-PN corrections improving bounds at the **\\(\\mathcal{O}(10\\%)\\)** level.",
    "- **Noncommutative spacetime from compact-binary mergers:** A leading **2PN** phase correction is implemented in a ppE deformation of IMRPhenomXHM including higher harmonics. Analyses of GW150914 and GW190814 yield **95th-percentile** bounds \\(\\sqrt{\\Lambda} < 0.68\\) and \\(\\sqrt{\\Lambda} < 0.46\\), respectively, representing strong observational constraints in this framework.",
    "- **Strong equivalence principle from multimessenger BNS observations:** A time-varying gravitational constant provides a generic parametrization of SEP violation, affecting both binary dynamics and GW propagation. A self-consistent waveform model incorporating source and propagation effects is applied to GW170817 with electromagnetic constraints on distance, sky location, and inclination. The joint analysis finds no deviation from GR and constrains the fractional variation to **\\(\\dot{G}/G \\in [-3.36\\times10^{-9},\\,5.34\\times10^{-10}]\\,\\mathrm{yr}^{-1}\\)**, representing the most stringent bounds obtained from real GW observations.",
    "- **Physical message:** Across all cases, current gravitational-wave observations are consistent with GR, but already probe well-motivated new-physics scenarios at meaningful levels. More broadly, they demonstrate that precision tests of gravity are controlled by the interplay of PN order, waveform systematics, detector sensitivity, and the availability of multimessenger information."
  ],

  figures: [
    {
      "src": "data/images/GW170817_axion_constraints_fa_ma.png",
      "alt": "Constraint plot in the (m_a, f_a) plane showing the region excluded by GW170817 compared to other bounds.",
      "caption": "Axions (GW170817): excluded region in \\((m_a, f_a)\\) from the axion-induced inspiral phasing test; complementary to other astrophysical and cosmological bounds.",
    },
    {
      "src": "data/images/GW170817_gammaa_posteriors_vs_lambda.png",
      "alt": "Posteriors for gamma_a as a function of axion Compton wavelength lambda_a with 3-sigma widths.",
      "caption": "Axions (GW170817): posteriors on the effective axion force-strength \\(\\gamma_a\\) across sampled \\(\\lambda_a\\), illustrating where the effect is Yukawa-suppressed or degenerate with intrinsic binary parameters.",
      layout: "below"  
    },
    {
      "src": "data/images/EdGB_alpha_km_combined.jpg",
      "alt": "Posterior distributions and 90% upper limits on sqrt(alpha_GB) from NSBH events and combined analyses.",
      "caption": "EdGB (NSBH events): posteriors for \\(\\sqrt{\\alpha_{\\mathrm{GB}}}\\) and 90% upper limits from GW200105/GW200115 (and combinations), consistent with GR."
    },
    {
      "src": "data/images/EdGB_alpha_km_high.jpg",
      "alt": "Bounds on sqrt(alpha_GB) comparing leading (−1PN) vs higher-PN (up to 2PN) phase corrections.",
      "caption": "EdGB: impact of including higher-PN corrections (mapped up to 2PN) relative to the leading \\(-1\\)PN term, tightening bounds at the \\(\\mathcal{O}(10\\%)\\) level for individual events."
    },
    {
      "src": "data/images/NC_posteriors_corner_GW150914_GW190814.png",
      "alt": "Posterior/corner plot showing constraints on sqrt(Lambda) for GW150914 and GW190814 under a noncommutative ppE waveform.",
      "caption": "Noncommutative spacetime: posterior constraints on \\(\\sqrt{\\Lambda}\\) from GW150914 and GW190814 using an IMRPhenomXHM-based ppE model with higher harmonics.",
      layout: "below"  
    },
    {
      "src": "data/images/varyingG.png",                                                                                                         
        "alt": "Posterior distributions for varying-\\(G\\) constraints from GW170817.",
        "caption": "Varying-\\(G\\) theory: posterior distributions from GW170817 using TaylorF2 (left) and IMRPhenomXAS\_NRTidalv2 (right). Orange shows GR, and blue shows the varying-\\(G\\) framework.",
        layout: "below"  
    }

  ],

  tag: [
    "Tests of General Relativity",
    "Beyond-GR / New Fields",
    "Axionlike Particles",
    "Einstein–dilaton–Gauss–Bonnet (EdGB)",
    "Noncommutative Spacetime",
    "Varying Gravitational Constant",
    "Multimessenger Gravity Tests",
    "Parameterized Post-Einsteinian (ppE)",
    "Bayesian Parameter Estimation",
    "LIGO/Virgo Events (GW170817, GW200105, GW200115, GW150914, GW190814)"
  ],

  "links": [
    {
      "label": "Axions from GW170817 (arXiv:2105.13963) — First Constraints on Nuclear-Coupled Axionlike Particles from GW170817",
      "href": "https://arxiv.org/abs/2105.13963"
    },
    {
      "label": "EdGB from NSBH events (arXiv:2201.02543) — Constraints on Einstein-dilaton-Gauss-Bonnet gravity from BH–NS GW events",
      "href": "https://arxiv.org/abs/2201.02543"
    },
    {
      "label": "Noncommutative spacetime (arXiv:2507.23442) — Constraining noncommutative spacetime with GW150914 and GW190814",
      "href": "https://arxiv.org/abs/2507.23442"
    },
    {
      "label": "Varying-G from GW170817 (arXiv:2603.25413) — Testing the strong equivalence principle with multimessenger binary neutron star mergers",
      "href": "https://arxiv.org/abs/2603.25413"
    },
    {
      "label": "Author GitHub (gwlyu)",
      "href": "https://github.com/gwlyu"
    },
    {
      "label": "GW Open Science Center (data access)",
      "href": "https://www.gw-openscience.org/"
    }
  ]
},










];
