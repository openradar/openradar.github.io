---
title: Pyrad
date: 2021-06-30
category: Projects
authors: MeteoSwiss/Météo-France 
tags: project, devel
language: Python
---

# Pyrad

## Quick description

Pyrad is a real-time (and off-line) data processing framework developed by MeteoSwiss and MeteoFrance. The framework is aimed at processing and visualizing polar data from individual weather radars as well as composite Cartesian products both off-line and in real time. It is written in the Python language.

It is capable of ingesting data stored in the most common radar data formats, e.g. C/FRadial, ODIM, Rainbow, NEXRAD level-2 among others.

The processing flow is controlled by 3 simple configuration files. Multiple levels of processing can be performed. At each level new datasets (e.g. attenuation corrected reflectivity) are created which can be stored in a file and/or used in the next processing level (for example, creating a rainfall rate dataset from the corrected reflectivity). Multiple products can be generated from each dataset (e.g. PPI, RHI images, histograms, etc.). In the off-line mode, data from multiple radars can be ingested in order to obtain products such as the inter-comparison of reflectivity values at co-located range gates.

The framework is able to ingest polarimetric and Doppler radar moments as well as auxiliary data such as numerical weather prediction parameters (e.g. temperature, wind speed, etc.), DEM-based visibility and data used in the generation of the products such as rain gauge measurements, disdrometer measurements, solar flux, etc. It can as well work with I/Q data, spectral data and Cartesian data.

The signal processing and part of the data visualization is performed by a [MeteoSwiss developed version](https://github.com/MeteoSwiss/pyart) of the [Py-ART radar toolkit](http://arm-doe.github.io/pyart/) which contains enhanced features. MeteoSwiss regularly contributes back to the main Py-ART branch once a new functionality has been thoroughly tested and it is considered of interest for the broad weather radar community.

The processing framework has multiple and expanding capabilities, include various forms of echo classification and filtering, differential phase and specific differential phase estimation, attenuation correction, data quality monitoring, multiple rainfall rate algorithms, etc. In addition time series of data in points, regions or trajectories of interest can be extracted and comparisons can be performed with other sensors. This is particularly useful when performing measurement campaigns where remote sensing retrievals are validated with in-situ airplane or ground-based measurements.

## Homepage
<https://github.com/MeteoSwiss/Pyrad>

## Code Repositories

### Core package
<https://github.com/MeteoSwiss/Pyrad>

### MeteoSwiss Py-ART
<https://github.com/MeteoSwiss/pyart>

### Sample data
<https://github.com/MeteoSwiss/pyrad-examples>

### PyPI package
<https://pypi.org/project/pyrad-mch/>

### Conda-forge package
<https://anaconda.org/conda-forge/pyrad_mch>

## Software Documentation
<https://pyrad-mch.readthedocs.io/en/latest/index.html>

## User group or forum page
Subscribe to the [mailing list](https://github.us1.list-manage.com/subscribe?u=2e8561343b026dacadbc70c92&id=9a43ddb927) for news and updates on releases.

Contact developers via the [Github Issues page](https://github.com/MeteoSwiss/pyrad/issues)

## License model
BSD

## Year of first release
2020

## Main programming language(s)
Python

## Supported platforms
Linux, Mac

## Type of software
Application and API/Library

## References
Figueras i Ventura, J., Lainer, M., Schauwecker, Z., Grazioli, J. and Germann, U., 2020. Pyrad: A Real-Time Weather Radar Data Processing Framework Based on Py-ART. Journal of Open Research Software, 8(1), p.28. DOI: <http://doi.org/10.5334/jors.330>
