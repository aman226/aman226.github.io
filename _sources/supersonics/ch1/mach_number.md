# 1.2 Mach Number and Compressibility

Although all fluids are, in principle, compressible, the extent to which compressibility affects a flow depends strongly on the flow conditions. In many practical situations, especially those involving low-speed motion, the changes in density are so small that they can be safely neglected. In contrast, high-speed flows often exhibit significant variations in density, pressure, and temperature, which must be captured accurately to model the physics correctly.

The central question, then, is not whether a fluid can compress, but whether those compressibility effects are strong enough to influence the flow field. This leads us to the need for a systematic way to assess when compressibility can be ignored and when it must be retained.

The key to this assessment lies in a non-dimensional parameter known as the **Mach number**. It compares the local flow speed to the speed at which pressure disturbances propagate through the medium. As we will see, the Mach number provides a quantitative criterion for determining the importance of compressibility effects, and helps delineate different flow regimes, from incompressible to supersonic and beyond.

**What is the Mach Number?**
---

The **Mach number** is defined as the ratio of the speed of a fluid flow to the speed of sound in that medium:

```{math}
:label: eq-mach-def
M = \frac{u}{a}
```

where:

- $ u $ is the local flow velocity  
- $ a $ is the local speed of sound in the medium  

The Mach number tells us how quickly information (such as pressure disturbances) can travel through the fluid. When $ M < 1 $, the flow is **subsonic**, and disturbances can propagate upstream. When $ M > 1 $, the flow is **supersonic**, and disturbances are confined downstream.


**Speed of Sound in a Gas**
---

The speed of sound represents the velocity at which small pressure disturbances move through a medium. In thermodynamics, it is defined as:

```{math}
:label: eq-sos
a = \sqrt{ \left( \frac{\partial p}{\partial \rho} \right)_s }
```

This is the square root of the rate of change of pressure with respect to density at constant entropy. For an ideal gas, this simplifies to:

```{math}
:label: eq-sos-ideal
a = \sqrt{\gamma R T}
```

where:

- $ \gamma $ is the ratio of specific heats ($ c_p / c_v $)
- $ R $ is the specific gas constant
- $ T $ is the absolute temperature

Thus, the speed of sound depends only on the thermodynamic properties of the gas and its temperature.


**Mach Number and Density Changes**
---

To understand how Mach number relates to compressibility, consider the 1D steady flow energy and continuity equations. From isentropic relations (valid for inviscid, adiabatic flows), the density change with respect to pressure in terms of Mach number is:

```{math}
:label: eq-rho-vs-p
\frac{d\rho}{\rho} = \frac{M^2}{1 - M^2} \cdot \frac{dp}{p}
```

This shows that as Mach number increases, the relative change in density due to a pressure change becomes amplified. When $ M \ll 1 $, the term $ \frac{M^2}{1 - M^2} $ is small, and density changes can often be neglected, hence the incompressible assumption is considered.

However, as $ M \to 1 $, this term grows rapidly, and compressibility can no longer be ignored.



**Why Does the Mach Number Matter for Compressibility?**
---

To understand this, recall from thermodynamics that a flow is called **compressible** if pressure changes lead to significant changes in density.

To see how the Mach number connects to this idea, we can examine how the density of a gas changes in response to pressure variations in a flow. Using isentropic relations (valid for inviscid, adiabatic flows), the density change due to a small pressure change can be written approximately as:

```{math}
:label: eq-density-change-mach
\frac{\Delta \rho}{\rho} \approx \frac{1}{2} \gamma M^2
```

This equation tells us that the fractional change in density increases with the square of the Mach number. It shows that **as Mach number increases, compressibility effects become more significant**.

Let’s evaluate this expression for air ($ \gamma = 1.4 $):

- At $ M = 0.1 $, the density change is roughly 0.7%
- At $ M = 0.3 $, it rises to nearly 6%
- At $ M = 0.5 $, it exceeds 17%

In engineering practice, a density change of less than 5% is often considered negligible. That is why we commonly treat flows as **incompressible when $ M < 0.3 $**.

> Compressibility is not a property of the fluid alone, it emerges from the **interaction between flow conditions and thermodynamic response**. The Mach number captures this interaction with remarkable clarity.

In the next section, we will explore how the Mach number helps us classify different flow regimes: subsonic, transonic, supersonic, and hypersonic.


