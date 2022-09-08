casgem_will_pts.json
On hover : `features.properties.site_code`
on click: show time series for just that site
Within Popup:
  format for x axis data: MM/DD/YYYY 
  format for y axis data: 0.00
  On Chart:
  y axis label: Ground Surface Elevation (feet)
  x axis label: Date

cdec_gages_pts.json
On hover : `features.properties.STATION - features.properties.station_id`
on click: show time series for just that site
Within Popup:
  format for x axis data: MM/DD/YYYY 
  format for y axis data: 0.00
  On Chart:
  y axis label: Flow (cfs)
  x axis label: Date

fresno_state_welss_pts.json
On hover : `features.properties.Name`
on click: show time series for just that site
Within Popup:
  format for x axis data: MM/DD/YYYY 
  format for y axis data: 0.00
  On Chart:
  y axis label: Water Table Elevation (feet)
  x axis label: Date

big_dry_creek_reservoir.json
On hover: titleCase(replace(name, "_", " "))
display: fill blue, outline different
on click: display description

big_dry_creek.json
On hover: titleCase(replace(name, "_", " "))
display: fill blue, outline different
on click: same as on hover

mcmullin_gsa_boundary.geojson
On hover: titleCase(replace(name, "_", " ")), fill
display: outline, no fill
on click: display description

nhd_lines.json
On hover : `features.properties.GNIS_NAME`
display: blue line
on click :  same as on hover

north_kings_gsa_boundary.geojson
On hover: titleCase(replace(name, "_", " ")), fill
display: outline, no fill
on click: display description

sjrc_project_boundary.json
On hover: titleCase(replace(name, "_", " ")), fill
display: outline, no fill
on click: display description

soil_characteristics.json
On hover: `features.properties.ksat_r`
display: outline no fill, or nice to have choropleth 
on click :  same as on hover