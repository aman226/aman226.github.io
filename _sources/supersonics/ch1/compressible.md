# 1.1 Compressible Flows

Supersonic flows are fundamentally compressible. At first glance, one might define compressible flows simply as flows with variable density. While this is partially true, the definition is incomplete. Not all flows with density variations are truly compressible in the aerodynamic sense.

To better understand compressibility, we turn to a thermodynamic perspective.

From thermodynamics, the **specific volume** $ v $ can be expressed as a function of temperature $ T $ and pressure $ P $:

```{math}
:label: eq-specific-volume
v = v(T, P)
```

Differentiating this expression yields:

```{math}
:label: eq-total-diff
dv = \left( \frac{\partial v}{\partial P} \right)_T dP + \left( \frac{\partial v}{\partial T} \right)_P dT
```

Dividing both sides by $ v $, we obtain the fractional change in specific volume:

```{math}
:label: eq-fractional-dv
\frac{dv}{v} = -\kappa_T dP + \beta dT
```

This form introduces two key thermodynamic properties:

- **Isothermal compressibility** $ \kappa_T $, which quantifies the change in specific volume due to pressure at constant temperature:

  ```{math}
  :label: eq-kappaT
  \kappa_T = -\frac{1}{v} \left( \frac{\partial v}{\partial P} \right)_T
  ```

- **Coefficient of volume expansion** $ \beta $, which quantifies the change in specific volume due to temperature at constant pressure:

  ```{math}
  :label: eq-beta
  \beta = \frac{1}{v} \left( \frac{\partial v}{\partial T} \right)_P
  ```

Equation {eq}`eq-fractional-dv` shows that changes in specific volume (or density) can result from changes in both **pressure** and **temperature**. In a flow field, if density variation is primarily driven by pressure changes, as is the case in high-speed flows, then the flow exhibits significant **compressibility effects**.

Conversely, in flows where pressure remains nearly constant and density changes are mainly due to temperature variations (e.g., natural convection), the flow is often treated as **incompressible**, even though the coefficient of expansion in {eq}`eq-beta` may be non-zero.

> In high-speed aerodynamics, it is the dominance of pressure-induced density change that defines a flow as compressible—not merely the presence of density variation.
