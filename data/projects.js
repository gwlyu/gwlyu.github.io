window.PROJECTS = [
{
  title: "Wet EMRIs: Formation Channels, Rates, Detectability, and Multi-messenger Science",
  meta: "EMRIs • Phys. Rev. D (2021 - 2026)",
  summary:
    "Together, these four papers build a coherent picture of “wet EMRIs” (stellar-mass compact objects inspiraling into massive BHs inside AGN disks): (i) how AGN disks capture and circularize inclined objects and drive rapid inward migration, (ii) why this disk channel can dominate the spaceborne EMRI yield (including a mass-gap subclass), and (iii) what multi-messenger science becomes possible—QPE-like X-ray transients, precision SMBH mass/spin calibration, jet-geometry tests, and bright/dark standard-siren cosmology with percent-level \\(H_0\\) constraints.",
  details_md: [
    "- **Channel mechanism (wet vs dry):** Dry EMRIs form via loss-cone dynamics in nuclear star clusters (two-body scattering; EMRIs form when \\(t_{\\rm gw}\\lesssim t_J\\)), typically entering the LISA band with nonzero eccentricity. Wet EMRIs form in AGNs: dynamical friction and disk-induced density waves damp inclination/eccentricity, capture the compact object into the disk, and drive inward migration (type-I for low masses; type-II if a gap opens) until GW emission dominates—yielding nearly circular, disk-aligned EMRIs in-band. This makes eccentricity (measurable down to \\(e\\sim10^{-5}\\) in forecasts) a practical channel discriminator.",
    "- **Formation-rate uplift from disks (Pan+Lyu+Yang 2021, arXiv:2104.01208):** Implements a Fokker–Planck framework where disk interactions add migration/damping advection and a capture sink/source term. Across plausible disk and duty-cycle assumptions, the disk channel can boost intrinsic EMRI production per active nucleus by orders of magnitude, motivating wet EMRIs as an important—potentially dominant—contributor to spaceborne detections when folded with a conservative AGN fraction \\(f_{\\rm AGN}=1\\%\\).",
    "- **Mass-gap subclass + channel inference (Pan+Lyu+Yang 2022, arXiv:2112.10237):** Proposes “mass-gap EMRIs” with a \\(\\sim(2.5\\text{–}5)\\,M_\\odot\\) compact object (MGO) inspiraling into a massive BH. In the dry channel, mass segregation strongly suppresses MGO EMRIs relative to stellar-mass BH EMRIs; in the wet channel, the suppression is only ∼ the mass-ratio scaling because both disk capture and migration speeds scale roughly with compact-object mass. Consequently, the wet channel is far more promising for observable mass-gap EMRIs. (Non-)detections and especially the detected ratio of MGO-to-sBH EMRIs can probe supernova remnant demographics (rapid vs delayed explosions) and constrain exotic origins such as primordial black holes.",
    "- **Detection-rate forecasts for wet EMRIs:**\n  - **Mass-gap EMRIs paper (arXiv:2112.10237):** gives LISA-detectable wet rates for MGOs of order \\(\\mathcal{O}(10\\text{–}10^2)\\times(f_{\\rm AGN}/1\\%)\\,\\mathrm{yr}^{-1}\\) in the physically motivated SMBH mass function case (their Table II), versus \\(\\lesssim 1\\,\\mathrm{yr}^{-1}\\) for dry mass-gap EMRIs.\n  - **Science-opportunities paper (arXiv:2501.03252):** updates *sBH* wet-EMRI rates using a TDE-informed (nearly log-flat) SMBH mass function and \\(f_{\\rm AGN}=1\\%\\): totals ∼ 390–3500/yr and LISA detections ∼ 8–100/yr depending on disk model and \\(T_{\\rm disk}=10^6\\text{–}10^8\\,\\mathrm{yr}\\) (their Table I), with a small but nontrivial subset having resolvable hosts (bright-siren candidates).",
    "- **Waveforms & parameter inference backbone:** The science-opportunities study (arXiv:2501.03252) evaluates detectability and localization using the AAK EMRI waveform model (via Fast EMRI Waveforms, FEW) and Fisher-matrix forecasts in a 14D parameter space. It emphasizes extremely precise GW measurements of SMBH mass and spin (framed as order \\(10^{-4}\\text{–}10^{-6}\\) in the paper), enabling downstream calibration and multi-messenger tests when the host AGN can be identified.",
    "- **Transient EM counterparts—type II QPEs (arXiv:2501.03252):** Proposes QPE-like X-ray flares produced when an sBH crosses a *warped* AGN disk twice per orbit (distinct from TDE-associated “type I QPEs”). A decoupling radius \\(r_{\\rm dec}\\sim(410\\text{–}430)M_\\bullet\\) is estimated by equating Lense–Thirring precession with maximal disk-alignment rate; inside \\(r_{\\rm dec}\\) the orbit can leave the disk and produce repeated disk-crossing shocks. Flare energetics scale with disk surface density \\(\\Sigma\\), and the different \\(\\Sigma(r)\\) scalings in \\(\\alpha\\)- vs \\(\\beta\\)-disk models imply measurably different flare strengths—turning type II QPEs into a disk-model diagnostic if observed jointly (or with GW-informed periodicity/orbit constraints).",
    "- **Calibrating EM SMBH mass/spin measurements (arXiv:2501.03252):** If a host AGN is identified, GW-derived SMBH parameters can calibrate EM estimators (e.g., virial BLR masses; X-ray reflection spins). The paper notes practical X-ray flux limitations: spin-calibration-quality reflection spectroscopy likely requires very nearby hosts (roughly \\(z\\lesssim0.1\\)) and deep exposures with next-generation missions (Athena/eXTP).",
    "- **Jet/disk geometry tests (arXiv:2501.03252):** Joint GW+EM can compare the SMBH spin axis (from GW), disk orientation (inferred by tracing the orbit back toward the decoupling region), and jet direction (from radio) to test jet-launching models. Event-by-event constraints are limited mainly by growing uncertainty in the disk azimuth/precession angle at larger radii, but population-level correlations remain promising.",
    "- **Cosmology with bright & dark sirens (arXiv:2501.03252):** Because wet EMRIs are associated with AGNs, restricting host candidates to AGNs (\\(f_{\\rm AGN}\\sim1\\%\\)) reduces localization-volume host counts. The paper forecasts (i) \\(\\sim1\\%\\) \\(H_0\\) precision with \\(\\mathcal{O}(7)\\) bright sirens (uniquely identified hosts, primarily at \\(z\\lesssim0.3\\)) and (ii) \\(\\sim3\\%\\) with \\(\\mathcal{O}(30)\\) dark sirens (statistical association with AGN catalogs) in an example model."
  ],
  figures: [
    {
      src: "data/images/wet_EMRI_rate.png",
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
    "Formation Channels (wet vs dry)",
    "Fokker–Planck Population Modeling",
    "Mass-gap Objects",
    "Quasi-Periodic Eruptions (Type II QPEs)",
    "SMBH Mass/Spin Calibration",
    "Jets (BZ vs BP)",
    "Standard Sirens (Bright/Dark)",
    "LISA / TianQin / Taiji"
  ],
  links: [
    { label: "Formation Rate of Extreme Mass Ratio Inspirals in Active Galactic Nuclei (arXiv:2101.09146)", href: "https://arxiv.org/abs/2101.09146" },
    { label: "Wet Extreme Mass Ratio Inspirals May Be More Common For Spaceborne Gravitational Wave Detection (arXiv:2104.01208)", href: "https://arxiv.org/abs/2104.01208" },
    { label: "Mass-gap extreme mass ratio inspirals (arXiv:2112.10237)", href: "https://arxiv.org/abs/2112.10237" },
    { label: "Science Opportunities of Wet Extreme Mass-Ratio Inspirals (arXiv:2501.03252)", href: "https://arxiv.org/abs/2501.03252" },
    { label: "Probing Formation Channels of Extreme Mass-Ratio Inspirals (arXiv:2509.00469)", href: "https://arxiv.org/abs/2509.00469" },  
    { label: "Code on GitHub", href: "https://github.com/gwlyu" }
  ]
},



{
  title: "Probing Spin-Induced Quadrupole Moments in Precessing Compact Binaries",
  meta: "Waveform Model • Phys. Rev. D (2023, 2024)",
  summary:
    "Develops and applies a precessing inspiral–merger–ringdown waveform that includes spin-induced quadrupole-moment effects in both the aligned-spin phase and the spin-precession dynamics, showing that precession can substantially improve measurability of the spin-induced quadrupole moment and help distinguish mass-gap objects and black-hole mimickers.",
  details_md: [
     "- **Goal:** Use gravitational-wave data to probe the spin-induced quadrupole moment (SIQM), parameterized by \\(Q = -\\kappa\\,\\chi^2 m^3\\), where \\(\\kappa=1\\) for GR black holes and typically \\(\\kappa>1\\) for neutron stars / exotic compact objects. Emphasis: identifying the nature of mass-gap objects (e.g., GW190814-like) when tidal deformability or EM counterparts are uninformative.",
    "- **Key idea:** SIQM affects waveforms through (i) aligned-spin-induced (AI) phase corrections starting at 2PN and (ii) precession-induced (PI) modifications to spin/orbital precession. The paper argues PI can be a more sensitive handle on \\(\\kappa\\) than AI for significantly precessing systems.",
    "- **Waveform/modeling:** Modifies IMRPhenomXPHM to allow generic \\(\\kappa\\) in both AI and PI sectors. Uses the MSA-based precession mapping and includes higher harmonics (keeps \\((\\ell,m)=(2,2),(2,1),(3,3)\\) to reduce cost). Optionally includes horizon absorption (HA) phase terms (2.5PN/3.5PN for spinning BHs). Tidal deformability is omitted by design for mass-gap objects (expected small at \\(\\sim 2.6\\,M_\\odot\\)).",
    "- **Mismatch study:** For four representative mass-gap binary classes (C1–C4), computes the CDF of waveform mismatch between a BH assumption (\\(\\kappa=1\\)) and models where SIQM/HA effects are toggled. HA produces the smallest mismatch; AI is typically largest, but PI dominates the mismatch budget for a nontrivial fraction of random spin-orientation draws (\\(>50\\%\\) PI contribution for \\(\\sim 31\\%, 23\\%, 21\\%, 14\\%\\) of samples in C1–C4, respectively).",
    "- **Parameter estimation:** Bayesian inference with MCMC (LALSuite + PyCBC with modifications), using a low-frequency cutoff \\(f_\\mathrm{low}=20\\,\\mathrm{Hz}\\). Injection distance fixed to \\(d_L=200\\,\\mathrm{Mpc}\\). Studies two detector networks: a five-detector A\\# network (post-O5-like) and a three-detector Cosmic Explorer (CE) network.",
    "- **Core result (why precession matters):** Demonstrates that AI-only models suffer strong degeneracies between \\(\\kappa\\) and spin parameters in aligned-spin waveforms, while PI effects in precessing waveforms break these degeneracies and can tighten constraints on \\(\\kappa\\) even when AI and PI contribute similar mismatch.",
    "- **Illustrative constraints for a GW190814-like (C2) setup:** with an A\\# network, \\(\\kappa\\) for the \\(2.6\\,M_\\odot\\) object is only marginally constrained (reported 90% upper limit around \\(\\kappa\\approx 3.9\\) and uncertainty \\(\\sim 2\\)); with a CE network the same setup yields a much sharper measurement \\(\\kappa_2 = 1.95^{+0.13}_{-0.21}\\), enabling decisive discrimination between BH-like and NS/exotic values if the object is rapidly spinning.",
    "- **BH mimickers application:** Re-analyzes selected GWTC events and injections using a common-quadrupole parameterization \\(\\kappa_1=\\kappa_2\\) and \\(\\delta\\kappa_s = (\\kappa_1+\\kappa_2)/2 - 1\\). Finds PI effects provide modest improvements for mildly precessing catalog events, but can significantly tighten \\(\\delta\\kappa_s\\) constraints for injected O4-like loud, precessing systems."
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
  summary: "These three papers share a common strategy for testing fundamental physics with gravitational waves: start from a concrete beyond-GR / beyond-Standard-Model theory that predicts a specific correction to compact-binary dynamics (typically an accumulated phase shift entering at a known PN order), embed that correction into a GR waveform family (explicit PN phasing or ppE-style), and use Bayesian inference on real LIGO/Virgo data to constrain the underlying theory parameter(s). In all three cases, the data are consistent with GR (or with the baseline GR+astrophysics model), yielding upper limits that improve upon earlier GW-only bounds in their respective frameworks.",
  details_md: [
    "- **Axionlike particles (GW170817; nuclear-coupled ALPs; inspiral-only deformation):**",
    "  - **Mechanism:** finite-density effects in neutron stars can trigger an in-medium axion-field transition, giving each NS an effective axion “charge.” Charged NSs feel an additional Yukawa interaction and can emit axion radiation, both of which modify the orbital evolution and GW phase.",
    "  - **Waveform implementation:** modify the TaylorF2 inspiral phase as \\(\\Psi(f) = \\Psi_{\\mathrm{GR}}(f) + \\Psi_a(f)\\), keeping the leading axion-induced correction (consistent with the null result implying small effective charges).",
    "  - **Parameters constrained:** axion mass \\(m_a\\) (or \\(\\lambda_a = 1/m_a\\)) and an effective force-strength \\(\\gamma_a \\equiv \\frac{Q_1 Q_2}{4\\pi G M_1 M_2}\\) that encodes the product of charges and can be attractive or repulsive depending on relative axion-field signs.",
    "  - **Inference choices:** Bayesian PE on GW170817 public data (Hanford + Livingston emphasized; Virgo low SNR), with EM-informed sky position/distance to reduce degeneracies; EOS-insensitive relations used to connect tidal information and charge ratio assumptions.",
    "  - **Headline bound (theory-space translation):** for very light axions (roughly \\(m_a \\lesssim 10^{-11}\\,\\mathrm{eV}\\)), GW170817 excludes a band in \\((m_a, f_a)\\), approximately \\(1.6\\times 10^{16}\\,\\mathrm{GeV} \\lesssim f_a \\lesssim 10^{18}\\,\\mathrm{GeV}\\) at about 3\\(\\sigma\\) (with constraints switching off for \\(f_a\\gtrsim 10^{18}\\,\\mathrm{GeV}\\) where NSs do not source the axion profile).",
    "---",
    "- **Einstein–dilaton–Gauss–Bonnet gravity (NSBH events; leading \\(-1\\)PN dipole radiation):**",
    "  - **Mechanism:** in EdGB (string-motivated), compact objects can acquire scalar charges, enabling dipole scalar radiation. This enters the inspiral phasing at \\(-1\\)PN order, giving strong leverage at low frequencies.",
    "  - **Event selection:** focuses on NSBH events GW200105 and GW200115 (and considers GW190814, which is compatible with either BBH or NSBH interpretations).",
    "  - **Analysis method:** Bayesian MCMC parameter estimation with the leading PN correction; bound consistency checked against an independent Fisher-matrix estimate.",
    "  - **Headline constraints:** 90% credible upper bound \\(\\sqrt{\\alpha_{\\mathrm{GB}}} \\lesssim 1.33\\,\\mathrm{km}\\); a stacked bound \\(\\sqrt{\\alpha_{\\mathrm{GB}}} \\lesssim 1.18\\,\\mathrm{km}\\) obtained by combining GW200105, GW200115, GW190814, and selected BBH events.",
    "  - **Higher-PN robustness:** waveform phase corrections mapped up to 2PN order; including these improves bounds by 14.5% (GW200105) and 6.9% (GW200115), indicating that subleading terms can matter at the current sensitivity level.",
    "---",
    "- **Noncommutative spacetime (GW150914 & GW190814; leading 2PN correction in ppE):**",
    "  - **Mechanism:** noncommutative gravity induces a leading compact-binary GW phase correction at 2PN order controlled by \\(\\Lambda \\equiv |\\theta^{0i}|/(l_P t_P)\\).",
    "  - **Waveform implementation:** construct a ppE-style deformation built on IMRPhenomXHM, explicitly including higher-order modes \\((2,1), (3,3), (3,2), (4,4)\\) in addition to \\((2,2)\\).",
    "  - **Headline constraints (95th percentile):** reanalysis of GW150914 yields \\(\\sqrt{\\Lambda} < 0.68\\), and GW190814 yields \\(\\sqrt{\\Lambda} < 0.46\\), reported as the strongest GW-observation constraint on noncommutative gravity to date in that work.",
    "---",
    "- **Cross-cutting takeaway across all three (in the requested order):**",
    "  - Each test is “theory-to-waveform-to-posterior”: derive \\(\\delta\\Psi(f)\\) at a specific PN order, embed into a standard GW template family, and constrain a small set of beyond-GR / new-physics parameters with Bayesian inference on real events.",
    "  - Constraint strength is controlled by (i) PN order (e.g., \\(-1\\)PN dipole radiation is typically very constraining), (ii) event properties (masses, mass ratio, harmonics, SNR distribution over frequency), and (iii) waveform systematics handling (inspiral cutoffs vs controlled IMR extensions, inclusion of higher harmonics, and theory-validity/small-coupling checks)."
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
    }
  ],
  tag: [
    "Tests of General Relativity",
    "Beyond-GR / New Fields",
    "Axionlike Particles",
    "Einstein–dilaton–Gauss–Bonnet (EdGB)",
    "Noncommutative Spacetime",
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
