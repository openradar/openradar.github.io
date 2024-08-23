---
title: pyhail
date: 2022-11-15
authors: bom
---

# Python Hail Retrievals Package (pyhail)

## Quick description
This software provides Python functions for retrieving hail properties from weather radar data ingested via Py-ART. This includes the Maximum Estimated Size of Hail (MESH), Hail Accumulation (hAcc), Hail Differential Reflectivity (HDR) and the Hail Size Discrimination Algorithm (HSDA). MESH is implemented for both the Py-ART radar (ppi) and grid objects, and options are available for different fits of the SHI hail-size relationship. A notebook is provided to demonstrate how to call each retrieval.

![pyhail sample image](../images/pyhail_sample.png)

## Homepage
<https://github.com/joshua-wx/pyhail>

## Code Repository
<https://github.com/joshua-wx/pyhail>

## Software Documentation
<https://github.com/joshua-wx/pyhail>

## User group or forum page
N/A

## License model
MIT License

## Year of first release
2022

## Main programming laguage(s)
Python

## Supported platforms
Linux

## Type of software
API/Library

## Further details
For help see README.md file. For license see the LICENSE file

Installation
Make sure this directory is in your PYTHONPATH

Install Py-ART (<https://github.com/ARM-DOE/pyart>)

Install pyhail using pip

To use pyhail:

```python
from pyhail import hdr, mesh_grid, mesh_ppi, hsda, hacc
```

Then you have access to the main() functions for each retrieval.

Obtaining the turbulence field for a volume can be as simple as:

```python
import pyart
from pyhail import mesh_ppi
radar = pyart.io.read('YOUR_FILE_HERE')
meshppi_fields = mesh_ppi.main(radar, 'REFLECTIVITY_FIELD_NAME', levels=['0C_LEVEL', '-20C_LEVEL])
radar.add_field('mesh', meshppi_fields['mesh_mh2019_95'], replace_existing=True)
```

You will then have a field called 'mh2019_95' that can be plotted, analyzed, or saved to file like any other Py-ART radar field. The mesh field will use the default MESH formulation, mesh_mh2019_95, unless specified - see documentation for more details.

## References

- Hail Size Discrimination Algorithm - HSDA ([Ortega et al. 2016](https://journals.ametsoc.org/doi/10.1175/JAMC-D-15-0203.1))
- Hail Differential Reflectivity - HDR ([Depue et al. 2007](https://doi.org/10.1175/JAM2529.1))
- Maximum Expected Size of Hail - MESH witt1998 ([Witt et al. 1998](https://journals.ametsoc.org/doi/10.1175/1520-0434%281998%29013%3C0286%3AAEHDAF%3E2.0.CO%3B2))
- Maximum Expected Size of Hail - MESH mh2019_75/mh2019_95 ([Murillo and Homeyer 2019](https://journals.ametsoc.org/view/journals/apme/58/5/jamc-d-18-0247.1.xml))
- Accumulated Hail - hAcc ([Wallace et al. 2019](https://journals.ametsoc.org/view/journals/wefo/34/1/waf-d-18-0053_1.xml))
