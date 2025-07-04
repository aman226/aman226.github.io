# 1.3 Flow Regimes Based on Mach Number

The Mach number determines the qualitative behavior of a flow field and its interaction with surrounding geometry. Compressible flow regimes are classified as follows:

**Subsonic Flow ($M < 1$)**
- Pressure disturbances can propagate upstream.
- For $M < 0.3$, compressibility is negligible.
- Governing equations are elliptic in nature.
- Typically smooth and predictable flow.

**Transonic Flow ($0.8 < M < 1.2$)**
- Contains both subsonic and supersonic zones.
- Local shock waves and flow separation are common.
- Highly sensitive to geometry and operating conditions.
- Mixed-type governing equations (elliptic + hyperbolic).

**Supersonic Flow ($M > 1$)**
- Disturbances cannot propagate upstream.
- Shock waves and expansion fans dominate flow structure.
- Governing equations are hyperbolic.
- Strong compressibility effects present.

**Hypersonic Flow ($M > 5$)**
- Exhibits strong shock–boundary layer interactions.
- Significant high-temperature effects:
  - Vibrational excitation
  - Molecular dissociation
  - Chemical reactions
- Requires thermochemical and viscous modeling.

---

**Flow Regime**

```{list-table} Flow Regimes by Mach Number
:header-rows: 1

* - Regime
  - Mach Number
  - Key Characteristics
* - Subsonic
  - $M < 1$
  - No shocks, upstream communication, low compressibility
* - Transonic
  - $0.8 < M < 1.2$
  - Local shocks, sensitivity, mixed-type PDEs
* - Supersonic
  - $M > 1$
  - Shock waves, expansion fans, hyperbolic behavior
* - Hypersonic
  - $M > 5$
  - Strong shocks, high-temperature effects, real-gas physics -->
