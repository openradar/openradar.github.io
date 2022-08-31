---
title: PyTDA
date: 2017-09-16
category: Projects
authors: nasa
tags: project, devel
language: Python
---

# Python Turbulence Detection Algorithm (PyTDA)

## Quick description
This software provides Python functions that will estimate turbulence from Doppler radar data ingested via Py-ART. Specifically, this software will estimate the cubic root of eddy dissipation rate, given input radar data containing reflectivity and spectrum width. Can be done on an individual sweep basis or by processing a full volume at once. If the latter, a new turbulence field is created within the Py-ART radar object. The turbulence algorithm is based on the NCAR Turbulence Detection Algorithm (NTDA), adapted to work with a single radar.

## Homepage
<https://github.com/nasa/PyTDA>

## Code Repository
<https://github.com/nasa/PyTDA>

## Software Documentation
<https://github.com/nasa/PyTDA>

## User group or forum page
N/A

## License model
NASA Open Source 3.0

## Year of first release
2015

## Main programming laguage(s)
Python

## Supported platforms
Linux. Mac

## Type of software
API/Library

## Further details
For help see HELP file. For license see LICENSE.md.

Installation
Make sure this directory is in your PYTHONPATH

Install Py-ART (<https://github.com/ARM-DOE/pyart>)

Run compile_pytda_cython_code.sh from the command line

To use PyTDA:
import pytda

Then you have access to the functions pytda.calc_turb_sweep() and pytda.calc_turb_vol().

Obtaining the turbulence field for a volume can be as simple as:
import pyart
import pytda
radar = pyart.io.read('YOUR_FILE_HERE')
pytda.calc_turb_vol(radar) #See function's docstring for kwargs

You will then have a field called 'turbulence' that can be plotted, analyzed, or saved to file like any other Py-ART radar field.

There is support for handling split cut volumes like NEXRAD, where reflectivity and spectrum width may be on separate sweeps. See the docstrings in the functions for more information.

For 2010 and older NEXRAD data (V06 and earlier), recommend running on UF or CFRadial formats produced from the native Level 2 files via Radx, due to conflicts between Py-ART and older NEXRAD data models.



## References

Turbulence and NTDA References

1. Bohne, A. R. (1982). Radar detection of turbulence in precipitation environments. Journal of the Atmospheric Sciences, 39(8), 1819-1837.
2. Doviak, R. J., and D. S. Zrnic, 1993: Doppler Radar and Weather Observations, Academic Press, 562 pp.
3. Labitt, M. (1981). Coordinated radar and aircraft observations of turbulence (No. ATC-108). Federal Aviation Administration, Systems Research and Development Service.
4. Williams, J. K., L. B. Cornman, J. Yee, S. G. Carson, G. Blackburn, and J. Craig, 2006: NEXRAD detection of hazardous turbulence. 44th AIAA Aerospace Sciences Meeting and Exhibit, Reno, NV.

Lang, T. J., Python-based scientific analysis and visualization of precipitation systems at NASA Marshall Space Flight Center. 5th Symposium on Advances in Modeling and Analysis Using Python, American Meteorological Society, Phoenix, AZ. (available online at <https://ams.confex.com/ams/95Annual/webprogram/Paper262779.html>)


