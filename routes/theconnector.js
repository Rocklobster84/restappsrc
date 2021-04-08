var express = require('express');
var router = express.Router();

/*
<% include ../../partials/navbar %>
<% include ../../partials/footer %>
*/

/* GET The Connector pages */
router.get(['/', '/index.html'], function(req, res, next) {
  res.render('theconnector/index');
});

// 2017 Q3
router.get(['/2017-Q3/Meshing-Challenges-Commercial-Software-Perspective', '/2017-Q3/Meshing-Challenges-Commercial-Software-Perspective.html'], function(req, res, next) {
  res.render('theconnector/2017-Q3/Meshing-Challenges-Commercial-Software-Perspective');
});

router.get(['/2017-Q3/Pointwise-Aids-Bid-Make-Worlds-Fastest-Bike', '/2017-Q3/Pointwise-Aids-Bid-Make-Worlds-Fastest-Bike.html'], function(req, res, next) {
  res.render('theconnector/2017-Q3/Pointwise-Aids-Bid-Make-Worlds-Fastest-Bike');
});

router.get(['/2017-Q3/Pointwise-Coming-South-Korea-Germany', '/2017-Q3/Pointwise-Coming-South-Korea-Germany.html'], function(req, res, next) {
  res.render('theconnector/2017-Q3/Pointwise-Coming-South-Korea-Germany');
});

router.get(['/2017-Q3/Report-from-1st-AIAA-Geometry-Mesh-Generation-Workshop', '/2017-Q3/Report-from-1st-AIAA-Geometry-Mesh-Generation-Workshop.html'], function(req, res, next) {
  res.render('theconnector/2017-Q3/Report-from-1st-AIAA-Geometry-Mesh-Generation-Workshop');
});

// 2017 Q2
router.get(['/2017-Q2/', '/2017-Q2/index.html'], function(req, res, next) {
  res.render('theconnector/2017-Q2/index');
});

router.get(['/2017-Q2/Big-Wave-Surfboard-Optimization-Pointwise-CRUNCH-CFD', '/2017-Q2/Big-Wave-Surfboard-Optimization-Pointwise-CRUNCH-CFD.html'], function(req, res, next) {
  res.render('theconnector/2017-Q2/Big-Wave-Surfboard-Optimization-Pointwise-CRUNCH-CFD');
});

router.get(['/2017-Q2/Looking-Ahead-New-Meshing-Capabilities', '/2017-Q2/Looking-Ahead-New-Meshing-Capabilities.html'], function(req, res, next) {
  res.render('theconnector/2017-Q2/Looking-Ahead-New-Meshing-Capabilities');
});

router.get(['/2017-Q2/Meet-Us-AIAA-Aviation-Forum-2017', '/2017-Q2/Meet-Us-AIAA-Aviation-Forum-2017.html'], function(req, res, next) {
  res.render('theconnector/2017-Q2/Meet-Us-AIAA-Aviation-Forum-2017');
});

// 2017 Q1
router.get(['/2017-Q1/', '/2017-Q1/index.html'], function(req, res, next) {
  res.render('theconnector/2017-Q1/index');
});

router.get(['/2017-Q1/CFD-Workshops-Geometry-Meshing-High-Lift', '/2017-Q1/CFD-Workshops-Geometry-Meshing-High-Lift.html'], function(req, res, next) {
  res.render('theconnector/2017-Q1/CFD-Workshops-Geometry-Meshing-High-Lift');
});

router.get(['/2017-Q1/Mesh-Generation-NASA-High-Lift-Common-Research-Model', '/2017-Q1/Mesh-Generation-NASA-High-Lift-Common-Research-Model.html'], function(req, res, next) {
  res.render('theconnector/2017-Q1/Mesh-Generation-NASA-High-Lift-Common-Research-Model');
});

router.get(['/2017-Q1/Numerical-Investigation-Pick-and-Place-Machine', '/2017-Q1/Numerical-Investigation-Pick-and-Place-Machine.html'], function(req, res, next) {
  res.render('theconnector/2017-Q1/Numerical-Investigation-Pick-and-Place-Machine');
});

router.get(['/2017-Q1/Pointwise-Aids-Aerospike-Nozzle-Design', '/2017-Q1/Pointwise-Aids-Aerospike-Nozzle-Design.html'], function(req, res, next) {
  res.render('theconnector/2017-Q1/Pointwise-Aids-Aerospike-Nozzle-Design');
});

// 2017 May Special
router.get(['/2017-May-Special/', '/2017-May-Special/index.html'], function(req, res, next) {
  res.render('theconnector/2017-May-Special/index');
});

router.get(['/2017-May-Special/Pointwise-V180-R3-Now-Available', '/2017-May-Special/Pointwise-V180-R3-Now-Available.html'], function(req, res, next) {
  res.render('theconnector/2017-May-Special/Pointwise-V180-R3-Now-Available');
});

// 2016 September Special
router.get(['/2016-September-Special/', '/2016-September-Special/index.html'], function(req, res, next) {
  res.render('theconnector/2016-September-Special/index');
});

router.get(['/2016-September-Special/Gridgen-End-of-Life', '/2016-September-Special/Gridgen-End-of-Life.html'], function(req, res, next) {
  res.render('theconnector/2016-September-Special/Gridgen-End-of-Life');
});

router.get(['/2016-September-Special/Pointwise-V18-Now-Available', '/2016-September-Special/Pointwise-V18-Now-Available.html'], function(req, res, next) {
  res.render('theconnector/2016-September-Special/Pointwise-V18-Now-Available');
});

// 2016 Q4
router.get(['/2016-Q4/', '/2016-Q4/index.html'], function(req, res, next) {
  res.render('theconnector/2016-Q4/index');
});

router.get(['/2016-Q4/Five-Best-Small-Features-Pointwise-V18', '/2016-Q4/Five-Best-Small-Features-Pointwise-V18.html'], function(req, res, next) {
  res.render('theconnector/2016-Q4/Five-Best-Small-Features-Pointwise-V18');
});

router.get(['/2016-Q4/Mesh-with-Pointwise-SciTech-2017', '/2016-Q4/Mesh-with-Pointwise-SciTech-2017.html'], function(req, res, next) {
  res.render('theconnector/2016-Q4/Mesh-with-Pointwise-SciTech-2017');
});

router.get(['/2016-Q4/Pointwise-User-Group-Meeting-Showcases-V18', '/2016-Q4/Pointwise-User-Group-Meeting-Showcases-V18.html'], function(req, res, next) {
  res.render('theconnector/2016-Q4/Pointwise-User-Group-Meeting-Showcases-V18');
});

router.get(['/2016-Q4/Rotorcraft-Hub-Wake-Analysis-Overset-Structured-Meshes', '/2016-Q4/Rotorcraft-Hub-Wake-Analysis-Overset-Structured-Meshes.html'], function(req, res, next) {
  res.render('theconnector/2016-Q4/Rotorcraft-Hub-Wake-Analysis-Overset-Structured-Meshes');
});

// 2016 Q3
router.get(['/2016-Q3/', '/2016-Q3/index.html'], function(req, res, next) {
  res.render('theconnector/2016-Q3/index');
});

router.get(['/2016-Q3/High-Order-Mesh-Generation-at-Pointwise', '/2016-Q3/High-Order-Mesh-Generation-at-Pointwise.html'], function(req, res, next) {
  res.render('theconnector/2016-Q3/High-Order-Mesh-Generation-at-Pointwise');
});

router.get(['/2016-Q3/Meshing-Overview-and-S-Duct-Results-from-Propulsion-Aerodynamics-Workshop', '/2016-Q3/Meshing-Overview-and-S-Duct-Results-from-Propulsion-Aerodynamics-Workshop.html'], function(req, res, next) {
  res.render('theconnector/2016-Q3/Meshing-Overview-and-S-Duct-Results-from-Propulsion-Aerodynamics-Workshop');
});

router.get(['/2016-Q3/Pointwise-Unstructured-Hex-Meshing-at-User-Group-Meeting', '/2016-Q3/Pointwise-Unstructured-Hex-Meshing-at-User-Group-Meeting.html'], function(req, res, next) {
  res.render('theconnector/2016-Q3/Pointwise-Unstructured-Hex-Meshing-at-User-Group-Meeting');
});

router.get(['/2016-Q3/Stanford-Solar-Car-Projects-Race-for-Aerodynamic-Efficiency', '/2016-Q3/Stanford-Solar-Car-Projects-Race-for-Aerodynamic-Efficiency.html'], function(req, res, next) {
  res.render('theconnector/2016-Q3/Stanford-Solar-Car-Projects-Race-for-Aerodynamic-Efficiency');
});

// 2016 Q2
router.get(['/2016-Q2/', '/2016-Q2/index.html'], function(req, res, next) {
  res.render('theconnector/2016-Q2/index');
});

router.get(['/2016-Q2/Automating-Geometry-Mesh-Generation-Heat-Exchangers', '/2016-Q2/Automating-Geometry-Mesh-Generation-Heat-Exchangers.html'], function(req, res, next) {
  res.render('theconnector/2016-Q2/Automating-Geometry-Mesh-Generation-Heat-Exchangers');
});

router.get(['/2016-Q2/Come-to-Cowtown-Show-Us-How-You-Mesh', '/2016-Q2/Come-to-Cowtown-Show-Us-How-You-Mesh.html'], function(req, res, next) {
  res.render('theconnector/2016-Q2/Come-to-Cowtown-Show-Us-How-You-Mesh');
});

router.get(['/2016-Q2/Smooth-Extrusion-Boundary-Layer-Meshes', '/2016-Q2/Smooth-Extrusion-Boundary-Layer-Meshes.html'], function(req, res, next) {
  res.render('theconnector/2016-Q2/Smooth-Extrusion-Boundary-Layer-Meshes');
});

router.get(['/2016-Q2/Two-Techniques-Meshing-Complex-CAD', '/2016-Q2/Two-Techniques-Meshing-Complex-CAD.html'], function(req, res, next) {
  res.render('theconnector/2016-Q2/Two-Techniques-Meshing-Complex-CAD');
});

// 2016 Q1
router.get(['/2016-Q1/', '/2016-Q1/index.html'], function(req, res, next) {
  res.render('theconnector/2016-Q1/index');
});

router.get(['/2016-Q1/North-Americas-Largest-3D-Printed-Structure-Started-Mesh', '/2016-Q1/North-Americas-Largest-3D-Printed-Structure-Started-Mesh.html'], function(req, res, next) {
  res.render('theconnector/2016-Q1/North-Americas-Largest-3D-Printed-Structure-Started-Mesh');
});

router.get(['/2016-Q1/Revisiting-Output-Based-Mesh-Adaptation', '/2016-Q1/Revisiting-Output-Based-Mesh-Adaptation.html'], function(req, res, next) {
  res.render('theconnector/2016-Q1/Revisiting-Output-Based-Mesh-Adaptation');
});

router.get(['/2016-Q1/Unstructured-Quad-Hex-Meshes-Sizing-Sources-Coming-Pointwise', '/2016-Q1/Unstructured-Quad-Hex-Meshes-Sizing-Sources-Coming-Pointwise.html'], function(req, res, next) {
  res.render('theconnector/2016-Q1/Unstructured-Quad-Hex-Meshes-Sizing-Sources-Coming-Pointwise');
});

// 2016 February Special
router.get(['/2016-February-Special/', '/2016-February-Special/index.html'], function(req, res, next) {
  res.render('theconnector/2016-February-Special/index');
});

router.get(['/2016-February-Special/Pointwise-V173-R5-Now-Available', '/2016-February-Special/Pointwise-V173-R5-Now-Available.html'], function(req, res, next) {
  res.render('theconnector/2016-February-Special/Pointwise-V173-R5-Now-Available');
});

// 2016 December Special
router.get(['/2016-December-Special/', '/2016-December-Special/index.html'], function(req, res, next) {
  res.render('theconnector/2016-December-Special/index');
});

router.get(['/2016-December-Special/Pointwise-V18-R2-Now-Available', '/2016-December-Special/Pointwise-V18-R2-Now-Available.html'], function(req, res, next) {
  res.render('theconnector/2016-December-Special/Pointwise-V18-R2-Now-Available');
});

// 2015 September Special
router.get(['/2015-September-Special/', '/2015-September-Special/index.html'], function(req, res, next) {
  res.render('theconnector/2015-September-Special/index');
});

router.get(['/2015-September-Special/Pointwise-V173-R4-Now-Available', '/2015-September-Special/Pointwise-V173-R4-Now-Available.html'], function(req, res, next) {
  res.render('theconnector/2015-September-Special/Pointwise-V173-R4-Now-Available');
});

// 2015 September
router.get(['/2015-September/', '/2015-September/index.html'], function(req, res, next) {
  res.render('theconnector/2015-September/index');
});

router.get(['/2015-September/Integrating-OpenVSP-Pointwise-High-Fidelity-CAE-Conceptual-Design', '/2015-September/Integrating-OpenVSP-Pointwise-High-Fidelity-CAE-Conceptual-Design.html'], function(req, res, next) {
  res.render('theconnector/2015-September/Integrating-OpenVSP-Pointwise-High-Fidelity-CAE-Conceptual-Design');
});

router.get(['/2015-September/Lets-Talk-Meshing-Workshop-Stuttgart', '/2015-September/Lets-Talk-Meshing-Workshop-Stuttgart.html'], function(req, res, next) {
  res.render('theconnector/2015-September/Lets-Talk-Meshing-Workshop-Stuttgart');
});

router.get(['/2015-September/Tips-Tricks-Reading-Writing-Files-Pointwise', '/2015-September/Tips-Tricks-Reading-Writing-Files-Pointwise.html'], function(req, res, next) {
  res.render('theconnector/2015-September/Tips-Tricks-Reading-Writing-Files-Pointwise');
});

router.get(['/2015-September/University-South-Florida-Races-with-Pointwise', '/2015-September/University-South-Florida-Races-with-Pointwise.html'], function(req, res, next) {
  res.render('theconnector/2015-September/University-South-Florida-Races-with-Pointwise');
});

// 2015 November
router.get(['/2015-November/', '/2015-November/index.html'], function(req, res, next) {
  res.render('theconnector/2015-November/index');
});

router.get(['/2015-November/Controlling-Localized-Element-Size-Gradation-in-Unstructured-Mesh', '/2015-November/Controlling-Localized-Element-Size-Gradation-in-Unstructured-Mesh.html'], function(req, res, next) {
  res.render('theconnector/2015-November/Controlling-Localized-Element-Size-Gradation-in-Unstructured-Mesh');
});

router.get(['/2015-November/Learn-Advanced-Pointwise-Techniques-Online', '/2015-November/Learn-Advanced-Pointwise-Techniques-Online.html'], function(req, res, next) {
  res.render('theconnector/2015-November/Learn-Advanced-Pointwise-Techniques-Online');
});

router.get(['/2015-November/Meshing-24th-IMR-Fender-Jazzmaster-Guitar-Abdominal-Atlas', '/2015-November/Meshing-24th-IMR-Fender-Jazzmaster-Guitar-Abdominal-Atlas.html'], function(req, res, next) {
  res.render('theconnector/2015-November/Meshing-24th-IMR-Fender-Jazzmaster-Guitar-Abdominal-Atlas');
});

router.get(['/2015-November/Overset-Structured-Mesh-Generation-for-Marine-Hydrokinetic-Devices', '/2015-November/Overset-Structured-Mesh-Generation-for-Marine-Hydrokinetic-Devices.html'], function(req, res, next) {
  res.render('theconnector/2015-November/Overset-Structured-Mesh-Generation-for-Marine-Hydrokinetic-Devices');
});

// 2015 May Special
router.get(['/2015-May-Special/', '/2015-May-Special/index.html'], function(req, res, next) {
  res.render('theconnector/2015-May-Special/index');
});

router.get(['/2015-May-Special/Pointwise-V173-R2-Now-Available', '/2015-May-Special/Pointwise-V173-R2-Now-Available.html'], function(req, res, next) {
  res.render('theconnector/2015-May-Special/Pointwise-V173-R2-Now-Available');
});

// 2015 May
router.get(['/2015-May/', '/2015-May/index.html'], function(req, res, next) {
  res.render('theconnector/2015-May/index');
});

router.get(['/2015-May/Garry-Rogers-Motorsports-Continues-Racing-Success-Pointwise', '/2015-May/Garry-Rogers-Motorsports-Continues-Racing-Success-Pointwise.html'], function(req, res, next) {
  res.render('theconnector/2015-May/Garry-Rogers-Motorsports-Continues-Racing-Success-Pointwise');
});

router.get(['/2015-May/Lets-Talk-Meshing-Dallas-Yall', '/2015-May/Lets-Talk-Meshing-Dallas-Yall.html'], function(req, res, next) {
  res.render('theconnector/2015-May/Lets-Talk-Meshing-Dallas-Yall');
});

router.get(['/2015-May/New-Distributor-Canada-Completes-Pointwise-Trifecta', '/2015-May/New-Distributor-Canada-Completes-Pointwise-Trifecta.html'], function(req, res, next) {
  res.render('theconnector/2015-May/New-Distributor-Canada-Completes-Pointwise-Trifecta');
});

router.get(['/2015-May/Will-Automated-Meshing-Spoil-Next-Generation-CFD-Engineers', '/2015-May/Will-Automated-Meshing-Spoil-Next-Generation-CFD-Engineers.html'], function(req, res, next) {
  res.render('theconnector/2015-May/Will-Automated-Meshing-Spoil-Next-Generation-CFD-Engineers');
});

// 2015 March
router.get(['/2015-March/', '/2015-March/index.html'], function(req, res, next) {
  res.render('theconnector/2015-March/index');
});

router.get(['/2015-March/Large-Scale-Aircraft-Design-Using-SU2-Pointwise', '/2015-March/Large-Scale-Aircraft-Design-Using-SU2-Pointwise.html'], function(req, res, next) {
  res.render('theconnector/2015-March/Large-Scale-Aircraft-Design-Using-SU2-Pointwise');
});

router.get(['/2015-March/New-Pointwise-Partner-India', '/2015-March/New-Pointwise-Partner-India.html'], function(req, res, next) {
  res.render('theconnector/2015-March/New-Pointwise-Partner-India');
});

router.get(['/2015-March/Underneath-Overset-Other-New-Features-Pointwise-V173', '/2015-March/Underneath-Overset-Other-New-Features-Pointwise-V173.html'], function(req, res, next) {
  res.render('theconnector/2015-March/Underneath-Overset-Other-New-Features-Pointwise-V173');
});

router.get(['/2015-March/Unstructured-Mesh-Generation-Simulation-Airfoil-Ice-Accretion', '/2015-March/Unstructured-Mesh-Generation-Simulation-Airfoil-Ice-Accretion.html'], function(req, res, next) {
  res.render('theconnector/2015-March/Unstructured-Mesh-Generation-Simulation-Airfoil-Ice-Accretion');
});

// 2015 June Special
router.get(['/2015-June-Special/', '/2015-June-Special/index.html'], function(req, res, next) {
  res.render('theconnector/2015-June-Special/index');
});

router.get(['/2015-June-Special/Pointwise-V173-R3-Now-Available', '/2015-June-Special/Pointwise-V173-R3-Now-Available.html'], function(req, res, next) {
  res.render('theconnector/2015-June-Special/Pointwise-V173-R3-Now-Available');
});

// 2015 July
router.get(['/2015-July/', '/2015-July/index.html'], function(req, res, next) {
  res.render('theconnector/2015-July/index');
});

router.get(['/2015-July/Direct-Numerical-Simulation-Woodwind-Aeroacoustics', '/2015-July/Direct-Numerical-Simulation-Woodwind-Aeroacoustics.html'], function(req, res, next) {
  res.render('theconnector/2015-July/Direct-Numerical-Simulation-Woodwind-Aeroacoustics');
});

router.get(['/2015-July/Musings-AIAA-Aviation-2015', '/2015-July/Musings-AIAA-Aviation-2015.html'], function(req, res, next) {
  res.render('theconnector/2015-July/Musings-AIAA-Aviation-2015');
});

router.get(['/2015-July/Supersonic-Jet-Crossflow-Analysis-Pointwise-CFD', '/2015-July/Supersonic-Jet-Crossflow-Analysis-Pointwise-CFD.html'], function(req, res, next) {
  res.render('theconnector/2015-July/Supersonic-Jet-Crossflow-Analysis-Pointwise-CFD');
});

router.get(['/2015-July/Welcome-Lets-Talk-Meshings-TutorialTuesday', '/2015-July/Welcome-Lets-Talk-Meshings-TutorialTuesday.html'], function(req, res, next) {
  res.render('theconnector/2015-July/Welcome-Lets-Talk-Meshings-TutorialTuesday');
});

// 2015 January
router.get(['/2015-January/', '/2015-January/index.html'], function(req, res, next) {
  res.render('theconnector/2015-January/index');
});

router.get(['/2015-January/Karmans-Mesh-Generation-History-Comes-Full-Circle-Pointwise', '/2015-January/Karmans-Mesh-Generation-History-Comes-Full-Circle-Pointwise.html'], function(req, res, next) {
  res.render('theconnector/2015-January/Karmans-Mesh-Generation-History-Comes-Full-Circle-Pointwise');
});

router.get(['/2015-January/Meshings-Path-Forward', '/2015-January/Meshings-Path-Forward.html'], function(req, res, next) {
  res.render('theconnector/2015-January/Meshings-Path-Forward');
});

router.get(['/2015-January/Students-Use-Pointwise-Overset-Grids-Aerodynamic-Analysis', '/2015-January/Students-Use-Pointwise-Overset-Grids-Aerodynamic-Analysis.html'], function(req, res, next) {
  res.render('theconnector/2015-January/Students-Use-Pointwise-Overset-Grids-Aerodynamic-Analysis');
});

router.get(['/2015-January/Turbine-Blade-Film-Cooling-Optimization-CFD', '/2015-January/Turbine-Blade-Film-Cooling-Optimization-CFD.html'], function(req, res, next) {
  res.render('theconnector/2015-January/Turbine-Blade-Film-Cooling-Optimization-CFD');
});

// 2015 February Special
router.get(['/2015-February-Special/', '/2015-February-Special/index.html'], function(req, res, next) {
  res.render('theconnector/2015-February-Special/index');
});

router.get(['/2015-February-Special/Pointwise-V173-R1-Now-Available', '/2015-February-Special/Pointwise-V173-R1-Now-Available.html'], function(req, res, next) {
  res.render('theconnector/2015-February-Special/Pointwise-V173-R1-Now-Available');
});

// 2014 September
router.get(['/2014-September/', '/2014-September/index.html'], function(req, res, next) {
  res.render('theconnector/2014-September/index');
});

router.get(['/2014-September/Glyph-Scripting-Automates-Terrain-Meshing-Wind-Turbine-Siting', '/2014-September/Glyph-Scripting-Automates-Terrain-Meshing-Wind-Turbine-Siting.html'], function(req, res, next) {
  res.render('theconnector/2014-September/Glyph-Scripting-Automates-Terrain-Meshing-Wind-Turbine-Siting');
});

router.get(['/2014-September/Pointwise-Meshes-Computation-Basic-States-Boundary-Layer-Stability', '/2014-September/Pointwise-Meshes-Computation-Basic-States-Boundary-Layer-Stability.html'], function(req, res, next) {
  res.render('theconnector/2014-September/Pointwise-Meshes-Computation-Basic-States-Boundary-Layer-Stability');
});

router.get(['/2014-September/Pointwise-Training-Includes-Overset-New-Tools-Techniques', '/2014-September/Pointwise-Training-Includes-Overset-New-Tools-Techniques.html'], function(req, res, next) {
  res.render('theconnector/2014-September/Pointwise-Training-Includes-Overset-New-Tools-Techniques');
});

router.get(['/2014-September/Why-You-Should-Be-Using-Overset-Grids', '/2014-September/Why-You-Should-Be-Using-Overset-Grids.html'], function(req, res, next) {
  res.render('theconnector/2014-September/Why-You-Should-Be-Using-Overset-Grids');
});

// 2014 November
router.get(['/2014-November/', '/2014-November/index.html'], function(req, res, next) {
  res.render('theconnector/2014-November/index');
});

router.get(['/2014-November/Fluid-Structure-Interaction-Wind-Turbine-Rotor-Blades', '/2014-November/Fluid-Structure-Interaction-Wind-Turbine-Rotor-Blades.html'], function(req, res, next) {
  res.render('theconnector/2014-November/Fluid-Structure-Interaction-Wind-Turbine-Rotor-Blades');
});

router.get(['/2014-November/How-Do-You-Define-Good-Grid', '/2014-November/How-Do-You-Define-Good-Grid.html'], function(req, res, next) {
  res.render('theconnector/2014-November/How-Do-You-Define-Good-Grid');
});

router.get(['/2014-November/OpenVSP-Pointwise-Work-Together-Simplify-CFD-Vehicle-Designs', '/2014-November/OpenVSP-Pointwise-Work-Together-Simplify-CFD-Vehicle-Designs.html'], function(req, res, next) {
  res.render('theconnector/2014-November/OpenVSP-Pointwise-Work-Together-Simplify-CFD-Vehicle-Designs');
});

router.get(['/2014-November/Pointwise-User-Meeting-Highlights-Training-Technical-Presentations', '/2014-November/Pointwise-User-Meeting-Highlights-Training-Technical-Presentations.html'], function(req, res, next) {
  res.render('theconnector/2014-November/Pointwise-User-Meeting-Highlights-Training-Technical-Presentations');
});

// 2014 May
router.get(['/2014-May/', '/2014-May/index.html'], function(req, res, next) {
  res.render('theconnector/2014-May/index');
});

router.get(['/2014-May/Gridgen-Grows-During-Awkward-Teenage-Years', '/2014-May/Gridgen-Grows-During-Awkward-Teenage-Years.html'], function(req, res, next) {
  res.render('theconnector/2014-May/Gridgen-Grows-During-Awkward-Teenage-Years');
});

router.get(['/2014-May/Meshing-Year-2030', '/2014-May/Meshing-Year-2030.html'], function(req, res, next) {
  res.render('theconnector/2014-May/Meshing-Year-2030');
});

router.get(['/2014-May/Pointwise-User-Group-Meeting-2014-Call-for-Papers', '/2014-May/Pointwise-User-Group-Meeting-2014-Call-for-Papers.html'], function(req, res, next) {
  res.render('theconnector/2014-May/Pointwise-User-Group-Meeting-2014-Call-for-Papers');
});

router.get(['/2014-May/Simulation-Unsteady-Propeller-Blade-Loads-Using-OpenFOAM', '/2014-May/Simulation-Unsteady-Propeller-Blade-Loads-Using-OpenFOAM.html'], function(req, res, next) {
  res.render('theconnector/2014-May/Simulation-Unsteady-Propeller-Blade-Loads-Using-OpenFOAM');
});

// 2014 March
router.get(['/2014-March/', '/2014-March/index.html'], function(req, res, next) {
  res.render('theconnector/2014-March/index');
});

router.get(['/2014-March/Co-Simulation-Renewable-Energy-Sector', '/2014-March/Co-Simulation-Renewable-Energy-Sector.html'], function(req, res, next) {
  res.render('theconnector/2014-March/Co-Simulation-Renewable-Energy-Sector');
});

router.get(['/2014-March/Good-User-Experience-Entity-Selection', '/2014-March/Good-User-Experience-Entity-Selection.html'], function(req, res, next) {
  res.render('theconnector/2014-March/Good-User-Experience-Entity-Selection');
});

router.get(['/2014-March/Grid-Visualization-Inspection-EnSight', '/2014-March/Grid-Visualization-Inspection-EnSight.html'], function(req, res, next) {
  res.render('theconnector/2014-March/Grid-Visualization-Inspection-EnSight');
});

router.get(['/2014-March/Product-Design-Simulation-Meshing', '/2014-March/Product-Design-Simulation-Meshing.html'], function(req, res, next) {
  res.render('theconnector/2014-March/Product-Design-Simulation-Meshing');
});

// 2014 July 
router.get(['/2014-July/', '/2014-July/index.html'], function(req, res, next) {
  res.render('theconnector/2014-July/index');
});

router.get(['/2014-July/30-Years-Meshing-Gridgen-Pointwise', '/2014-July/30-Years-Meshing-Gridgen-Pointwise.html'], function(req, res, next) {
  res.render('theconnector/2014-July/30-Years-Meshing-Gridgen-Pointwise');
});

router.get(['/2014-July/New-Capabilities-Coming-Pointwise', '/2014-July/New-Capabilities-Coming-Pointwise.html'], function(req, res, next) {
  res.render('theconnector/2014-July/New-Capabilities-Coming-Pointwise');
});

router.get(['/2014-July/Now-Accepting-Entries-2014-Meshy-Award', '/2014-July/Now-Accepting-Entries-2014-Meshy-Award.html'], function(req, res, next) {
  res.render('theconnector/2014-July/Now-Accepting-Entries-2014-Meshy-Award');
});

router.get(['/2014-July/Pointwise-Boosts-Garry-Rogers-Motorsport-Season-Opening-Win', '/2014-July/Pointwise-Boosts-Garry-Rogers-Motorsport-Season-Opening-Win.html'], function(req, res, next) {
  res.render('theconnector/2014-July/Pointwise-Boosts-Garry-Rogers-Motorsport-Season-Opening-Win');
});

router.get(['/2014-July/Unsteady-Engine-Analysis-Moving-Mesh-OpenFOAM', '/2014-July/Unsteady-Engine-Analysis-Moving-Mesh-OpenFOAM.html'], function(req, res, next) {
  res.render('theconnector/2014-July/Unsteady-Engine-Analysis-Moving-Mesh-OpenFOAM');
});

// 2014 January
router.get(['/2014-January/', '/2014-January/index.html'], function(req, res, next) {
  res.render('theconnector/2014-January/index');
});

router.get(['/2014-January/CFD-Beratung-Pointwise-Silver-Distributor-Since-2011', '/2014-January/CFD-Beratung-Pointwise-Silver-Distributor-Since-2011.html'], function(req, res, next) {
  res.render('theconnector/2014-January/CFD-Beratung-Pointwise-Silver-Distributor-Since-2011');
});

router.get(['/2014-January/Computational-Optimization-Rocket-Engine-Nozzles', '/2014-January/Computational-Optimization-Rocket-Engine-Nozzles.html'], function(req, res, next) {
  res.render('theconnector/2014-January/Computational-Optimization-Rocket-Engine-Nozzles');
});

router.get(['/2014-January/Five-Steps-Automate-Meshing-via-Scripting', '/2014-January/Five-Steps-Automate-Meshing-via-Scripting.html'], function(req, res, next) {
  res.render('theconnector/2014-January/Five-Steps-Automate-Meshing-via-Scripting');
});

router.get(['/2014-January/How-The-Journey-Began-20-Years-Ago', '/2014-January/How-The-Journey-Began-20-Years-Ago.html'], function(req, res, next) {
  res.render('theconnector/2014-January/How-The-Journey-Began-20-Years-Ago');
});

router.get(['/2014-January/Video-Tutorial-Shows-O-H-Topology-Step-by-Step', '/2014-January/Video-Tutorial-Shows-O-H-Topology-Step-by-Step.html'], function(req, res, next) {
  res.render('theconnector/2014-January/Video-Tutorial-Shows-O-H-Topology-Step-by-Step');
});

// 2014 August Special
router.get(['/2014-August-Special/', '/2014-August-Special/index.html'], function(req, res, next) {
  res.render('theconnector/2014-August-Special/index');
});

router.get(['/2014-August-Special/Pointwise-Training-Investment-Meshing-Skills-Best-Practices', '/2014-August-Special/Pointwise-Training-Investment-Meshing-Skills-Best-Practices.html'], function(req, res, next) {
  res.render('theconnector/2014-August-Special/Pointwise-Training-Investment-Meshing-Skills-Best-Practices');
});

router.get(['/2014-August-Special/Pointwise-V172-R2-Now-Available', '/2014-August-Special/Pointwise-V172-R2-Now-Available.html'], function(req, res, next) {
  res.render('theconnector/2014-August-Special/Pointwise-V172-R2-Now-Available');
});

// 2014 April Special
router.get(['/2014-April-Special/', '/2014-April-Special/index.html'], function(req, res, next) {
  res.render('theconnector/2014-April-Special/index');
});

router.get(['/2014-April-Special/Platform-End-of-Life-Notice', '/2014-April-Special/Platform-End-of-Life-Notice.html'], function(req, res, next) {
  res.render('theconnector/2014-April-Special/Platform-End-of-Life-Notice');
});

router.get(['/2014-April-Special/Pointwise-Training-Investment-Good-Grids-Best-Approaches', '/2014-April-Special/Pointwise-Training-Investment-Good-Grids-Best-Approaches.html'], function(req, res, next) {
  res.render('theconnector/2014-April-Special/Pointwise-Training-Investment-Good-Grids-Best-Approaches');
});

router.get(['/2014-April-Special/Pointwise-V172-Now-Available', '/2014-April-Special/Pointwise-V172-Now-Available.html'], function(req, res, next) {
  res.render('theconnector/2014-April-Special/Pointwise-V172-Now-Available');
});

// 2013 September Special
router.get(['/2013-September-Special/', '/2013-September-Special/index.html'], function(req, res, next) {
  res.render('theconnector/2013-September-Special/index');
});

router.get(['/2013-September-Special/Compute-Wall-Spacing-Android-Free', '/2013-September-Special/Compute-Wall-Spacing-Android-Free.html'], function(req, res, next) {
  res.render('theconnector/2013-September-Special/Compute-Wall-Spacing-Android-Free');
});

router.get(['/2013-September-Special/Pointwise-Version-171-R4-Available', '/2013-September-Special/Pointwise-Version-171-R4-Available.html'], function(req, res, next) {
  res.render('theconnector/2013-September-Special/Pointwise-Version-171-R4-Available');
});

router.get(['/2013-September-Special/Why-Value-Simulation-Still-Unclear', '/2013-September-Special/Why-Value-Simulation-Still-Unclear.html'], function(req, res, next) {
  res.render('theconnector/2013-September-Special/Why-Value-Simulation-Still-Unclear');
});

// 2013 September
router.get(['/2013-September/', '/2013-September/index.html'], function(req, res, next) {
  res.render('theconnector/2013-September/index');
});

router.get(['/2013-September/CFD-Investigation-LBE-Rod-Bundle-Flow', '/2013-September/CFD-Investigation-LBE-Rod-Bundle-Flow.html'], function(req, res, next) {
  res.render('theconnector/2013-September/CFD-Investigation-LBE-Rod-Bundle-Flow');
});

router.get(['/2013-September/Gas-Turbine-Combustor-Mixing-Cranfield', '/2013-September/Gas-Turbine-Combustor-Mixing-Cranfield.html'], function(req, res, next) {
  res.render('theconnector/2013-September/Gas-Turbine-Combustor-Mixing-Cranfield');
});

router.get(['/2013-September/Proof-Pointwise-Perfect-Professors', '/2013-September/Proof-Pointwise-Perfect-Professors.html'], function(req, res, next) {
  res.render('theconnector/2013-September/Proof-Pointwise-Perfect-Professors');
});

router.get(['/2013-September/VINAS-Focuses-Efficiency-Upgrading-Workflow-Management', '/2013-September/VINAS-Focuses-Efficiency-Upgrading-Workflow-Management.html'], function(req, res, next) {
  res.render('theconnector/2013-September/VINAS-Focuses-Efficiency-Upgrading-Workflow-Management');
});

// 2013 November
router.get(['/2013-November/', '/2013-November/index.html'], function(req, res, next) {
  res.render('theconnector/2013-November/index');
});

router.get(['/2013-November/CFD-Technologies-Supporting-Pointwise-UK-Over-10-Years', '/2013-November/CFD-Technologies-Supporting-Pointwise-UK-Over-10-Years.html'], function(req, res, next) {
  res.render('theconnector/2013-November/CFD-Technologies-Supporting-Pointwise-UK-Over-10-Years');
});

router.get(['/2013-November/Gridgen-Diehard-Gives-Pointwise-A-Plus', '/2013-November/Gridgen-Diehard-Gives-Pointwise-A-Plus.html'], function(req, res, next) {
  res.render('theconnector/2013-November/Gridgen-Diehard-Gives-Pointwise-A-Plus');
});

router.get(['/2013-November/How-We-Meshed-IMR-Brains-Beauty-Contest-Geometry', '/2013-November/How-We-Meshed-IMR-Brains-Beauty-Contest-Geometry.html'], function(req, res, next) {
  res.render('theconnector/2013-November/How-We-Meshed-IMR-Brains-Beauty-Contest-Geometry');
});

router.get(['/2013-November/Pointwise-Helps-UTA-Racing-Push-Aerodynamic-Envelope', '/2013-November/Pointwise-Helps-UTA-Racing-Push-Aerodynamic-Envelope.html'], function(req, res, next) {
  res.render('theconnector/2013-November/Pointwise-Helps-UTA-Racing-Push-Aerodynamic-Envelope');
});

router.get(['/2013-November/Pointwise-Meshing-Whats-New-Coming', '/2013-November/Pointwise-Meshing-Whats-New-Coming.html'], function(req, res, next) {
  res.render('theconnector/2013-November/Pointwise-Meshing-Whats-New-Coming');
});

// 2013 May
router.get(['/2013-May/', '/2013-May/index.html'], function(req, res, next) {
  res.render('theconnector/2013-May/index');
});

router.get(['/2013-May/Mesh-Manipulation-Moving-Surfaces', '/2013-May/Mesh-Manipulation-Moving-Surfaces.html'], function(req, res, next) {
  res.render('theconnector/2013-May/Mesh-Manipulation-Moving-Surfaces');
});

router.get(['/2013-May/More-Preprocessing-Capabilities-Pointwise', '/2013-May/More-Preprocessing-Capabilities-Pointwise.html'], function(req, res, next) {
  res.render('theconnector/2013-May/More-Preprocessing-Capabilities-Pointwise');
});

router.get(['/2013-May/TAEYANG-Enjoys-Smooth-Sailing', '/2013-May/TAEYANG-Enjoys-Smooth-Sailing.html'], function(req, res, next) {
  res.render('theconnector/2013-May/TAEYANG-Enjoys-Smooth-Sailing');
});

router.get(['/2013-May/Texas-A&M-Uses-Pointwise-Meshes-Boundary-Layer-Stability-Analysis', '/2013-May/Texas-A&M-Uses-Pointwise-Meshes-Boundary-Layer-Stability-Analysis.html'], function(req, res, next) {
  res.render('theconnector/2013-May/Texas-A&M-Uses-Pointwise-Meshes-Boundary-Layer-Stability-Analysis');
});

// 2013 March
router.get(['/2013-March/', '/2013-March/index.html'], function(req, res, next) {
  res.render('theconnector/2013-March/index');
});

router.get(['/2013-March/Pointwise-Gives-GRM-Time-Savings-V8-Supercar-Design', '/2013-March/Pointwise-Gives-GRM-Time-Savings-V8-Supercar-Design.html'], function(req, res, next) {
  res.render('theconnector/2013-March/Pointwise-Gives-GRM-Time-Savings-V8-Supercar-Design');
});

router.get(['/2013-March/Pointwise-User-Group-Meeting-Meshes-Up-Fort-Worth', '/2013-March/Pointwise-User-Group-Meeting-Meshes-Up-Fort-Worth.html'], function(req, res, next) {
  res.render('theconnector/2013-March/Pointwise-User-Group-Meeting-Meshes-Up-Fort-Worth');
});

router.get(['/2013-March/Quality-Control-Two-Reasons-Structured-Grids-Arent-Going-Away', '/2013-March/Quality-Control-Two-Reasons-Structured-Grids-Arent-Going-Away.html'], function(req, res, next) {
  res.render('theconnector/2013-March/Quality-Control-Two-Reasons-Structured-Grids-Arent-Going-Away');
});

router.get('/march-2013/structured-grids-in-pointwise.shtml', function(req, res, next) {
	res.status(301).redirect('https://www.pointwise.com/theconnector/2013-March/Quality-Control-Two-Reasons-Structured-Grids-Arent-Going-Away');
});

router.get(['/2013-March/Syracuse-University-Gets-CFD-Work-Spinning', '/2013-March/Syracuse-University-Gets-CFD-Work-Spinning.html'], function(req, res, next) {
  res.render('theconnector/2013-March/Syracuse-University-Gets-CFD-Work-Spinning');
});

// 2013 June Special
router.get(['/2013-June-Special/', '/2013-June-Special/index.html'], function(req, res, next) {
  res.render('theconnector/2013-June-Special/index');
});

router.get(['/2013-June-Special/Compute-Wall-Spacing-iPhone', '/2013-June-Special/Compute-Wall-Spacing-iPhone.html'], function(req, res, next) {
  res.render('theconnector/2013-June-Special/Compute-Wall-Spacing-iPhone');
});

router.get(['/2013-June-Special/Glyph-Script-Exchange-Now-GitHub', '/2013-June-Special/Glyph-Script-Exchange-Now-GitHub.html'], function(req, res, next) {
  res.render('theconnector/2013-June-Special/Glyph-Script-Exchange-Now-GitHub');
});

router.get(['/2013-June-Special/Pointwise-Version-171-R3-Available', '/2013-June-Special/Pointwise-Version-171-R3-Available.html'], function(req, res, next) {
  res.render('theconnector/2013-June-Special/Pointwise-Version-171-R3-Available');
});

// 2013 July
router.get(['/2013-July/', '/2013-July/index.html'], function(req, res, next) {
  res.render('theconnector/2013-July/index');
});

router.get(['/2013-July/Emirates-Team-New-Zealand-Uses-Pointwise-AC72-Hydrodynamics-Design', '/2013-July/Emirates-Team-New-Zealand-Uses-Pointwise-AC72-Hydrodynamics-Design.html'], function(req, res, next) {
  res.render('theconnector/2013-July/Emirates-Team-New-Zealand-Uses-Pointwise-AC72-Hydrodynamics-Design');
});

router.get(['/2013-July/Multi-Module-Centrifugal-Pump-Grid-Using-Pointwises-Unstructured-Mesh-Features', '/2013-July/Multi-Module-Centrifugal-Pump-Grid-Using-Pointwises-Unstructured-Mesh-Features.html'], function(req, res, next) {
  res.render('theconnector/2013-July/Multi-Module-Centrifugal-Pump-Grid-Using-Pointwises-Unstructured-Mesh-Features');
});

router.get(['/2013-July/Playing-Rules-Proactive-Mesh-Quality-Assessment', '/2013-July/Playing-Rules-Proactive-Mesh-Quality-Assessment.html'], function(req, res, next) {
  res.render('theconnector/2013-July/Playing-Rules-Proactive-Mesh-Quality-Assessment');
});

router.get(['/2013-July/Wikki-Brasil-Offers-OpenFOAM-Tools-Growing-CFD-Market', '/2013-July/Wikki-Brasil-Offers-OpenFOAM-Tools-Growing-CFD-Market.html'], function(req, res, next) {
  res.render('theconnector/2013-July/Wikki-Brasil-Offers-OpenFOAM-Tools-Growing-CFD-Market');
});

// 2013 January
router.get(['/2013-January/', '/2013-January/index.html'], function(req, res, next) {
  res.render('theconnector/2013-January/index');
});

router.get(['/2013-January/8-Most-Helpful-Commands-Youre-Not-Using', '/2013-January/8-Most-Helpful-Commands-Youre-Not-Using.html'], function(req, res, next) {
  res.render('theconnector/2013-January/8-Most-Helpful-Commands-Youre-Not-Using');
});

router.get(['/2013-January/CATS-Probes-Properties-Fluid-Particle-Interaction-Pointwise', '/2013-January/CATS-Probes-Properties-Fluid-Particle-Interaction-Pointwise.html'], function(req, res, next) {
  res.render('theconnector/2013-January/CATS-Probes-Properties-Fluid-Particle-Interaction-Pointwise');
});

router.get(['/2013-January/Pointwise-User-Group-Meeting-Training-Focus', '/2013-January/Pointwise-User-Group-Meeting-Training-Focus.html'], function(req, res, next) {
  res.render('theconnector/2013-January/Pointwise-User-Group-Meeting-Training-Focus');
});

router.get(['/2013-January/Simulations-Unsteady-Flow-Around-3D-Flapping-Wing', '/2013-January/Simulations-Unsteady-Flow-Around-3D-Flapping-Wing.html'], function(req, res, next) {
  res.render('theconnector/2013-January/Simulations-Unsteady-Flow-Around-3D-Flapping-Wing');
});

// 2013 February Special
router.get(['/2013-February-Special/', '/2013-February-Special/index.html'], function(req, res, next) {
  res.render('theconnector/2013-February-Special/index');
});

router.get(['/2013-February-Special/Pointwise-Version-171-R2', '/2013-February-Special/Pointwise-Version-171-R2.html'], function(req, res, next) {
  res.render('theconnector/2013-February-Special/Pointwise-Version-171-R2');
});

router.get(['/2013-February-Special/Three-Step-Pointwise-User-Group-Meeting', '/2013-February-Special/Three-Step-Pointwise-User-Group-Meeting.html'], function(req, res, next) {
  res.render('theconnector/2013-February-Special/Three-Step-Pointwise-User-Group-Meeting');
});

// 2012 September
router.get(['/2012-September/', '/2012-September/index.html'], function(req, res, next) {
  res.render('theconnector/2012-September/index');
});

router.get(['/2012-September/Analytic-vs-Discrete-Geometry', '/2012-September/Analytic-vs-Discrete-Geometry.html'], function(req, res, next) {
  res.render('theconnector/2012-September/Analytic-vs-Discrete-Geometry');
});

router.get(['/2012-September/Drag-Effects-Heating-Cooling-Cylinders-Crossflow', '/2012-September/Drag-Effects-Heating-Cooling-Cylinders-Crossflow.html'], function(req, res, next) {
  res.render('theconnector/2012-September/Drag-Effects-Heating-Cooling-Cylinders-Crossflow');
});

router.get(['/2012-September/Interface-World-Using-Pointwise-CAE-Plugins', '/2012-September/Interface-World-Using-Pointwise-CAE-Plugins.html'], function(req, res, next) {
  res.render('theconnector/2012-September/Interface-World-Using-Pointwise-CAE-Plugins');
});

router.get(['/2012-September/Pointwise-User-Group-Meeting-2013-Call-for-Papers', '/2012-September/Pointwise-User-Group-Meeting-2013-Call-for-Papers.html'], function(req, res, next) {
  res.render('theconnector/2012-September/Pointwise-User-Group-Meeting-2013-Call-for-Papers');
});

// 2012 November
router.get(['/2012-November/', '/2012-November/index.html'], function(req, res, next) {
  res.render('theconnector/2012-November/index');
});

router.get(['/2012-November/Advancing-Front-Mesher-Faster-IO-Coming-Pointwise', '/2012-November/Advancing-Front-Mesher-Faster-IO-Coming-Pointwise.html'], function(req, res, next) {
  res.render('theconnector/2012-November/Advancing-Front-Mesher-Faster-IO-Coming-Pointwise');
});

router.get(['/2012-November/Come-Down-Texas-Pointwise-User-Group-Meeting', '/2012-November/Come-Down-Texas-Pointwise-User-Group-Meeting.html'], function(req, res, next) {
  res.render('theconnector/2012-November/Come-Down-Texas-Pointwise-User-Group-Meeting');
});

router.get(['/2012-November/Mesh-Generation-Airframe-Noise-Computations', '/2012-November/Mesh-Generation-Airframe-Noise-Computations.html'], function(req, res, next) {
  res.render('theconnector/2012-November/Mesh-Generation-Airframe-Noise-Computations');
});

router.get(['/2012-November/Planned-End-Proprietary-UNIX-Support-Gridgen', '/2012-November/Planned-End-Proprietary-UNIX-Support-Gridgen.html'], function(req, res, next) {
  res.render('theconnector/2012-November/Planned-End-Proprietary-UNIX-Support-Gridgen');
});

router.get(['/2012-November/Pointwise-Quantum-Jump-Forward-Meshing', '/2012-November/Pointwise-Quantum-Jump-Forward-Meshing.html'], function(req, res, next) {
  res.render('theconnector/2012-November/Pointwise-Quantum-Jump-Forward-Meshing');
});

// 2012 May
router.get(['/2012-May/', '/2012-May/index.html'], function(req, res, next) {
  res.render('theconnector/2012-May/index');
});

router.get(['/2012-May/Accuracy-Convergence-Mesh-Quality', '/2012-May/Accuracy-Convergence-Mesh-Quality.html'], function(req, res, next) {
  res.render('theconnector/2012-May/Accuracy-Convergence-Mesh-Quality');
});

router.get(['/2012-May/Meshing-Structured-Accuracy-Overset-Grids-Pointwise', '/2012-May/Meshing-Structured-Accuracy-Overset-Grids-Pointwise.html'], function(req, res, next) {
  res.render('theconnector/2012-May/Meshing-Structured-Accuracy-Overset-Grids-Pointwise');
});

router.get(['/2012-May/Quilting-Make-Meshing-Easier', '/2012-May/Quilting-Make-Meshing-Easier.html'], function(req, res, next) {
  res.render('theconnector/2012-May/Quilting-Make-Meshing-Easier');
});

router.get(['/2012-May/Student-Experience-Pointwise-WVU-Introduction-CFD-Course', '/2012-May/Student-Experience-Pointwise-WVU-Introduction-CFD-Course.html'], function(req, res, next) {
  res.render('theconnector/2012-May/Student-Experience-Pointwise-WVU-Introduction-CFD-Course');
});

// 2012 March Special
router.get(['/2012-March-Special/', '/2012-March-Special/index.html'], function(req, res, next) {
  res.render('theconnector/2012-March-Special/index');
});

router.get(['/2012-March-Special/Pointwise-Training-Frankfurt-Germany', '/2012-March-Special/Pointwise-Training-Frankfurt-Germany.html'], function(req, res, next) {
  res.render('theconnector/2012-March-Special/Pointwise-Training-Frankfurt-Germany');
});

router.get(['/2012-March-Special/Pointwise-Version-17', '/2012-March-Special/Pointwise-Version-17.html'], function(req, res, next) {
  res.render('theconnector/2012-March-Special/Pointwise-Version-17');
});

// 2012 March
router.get(['/2012-March/', '/2012-March/index.html'], function(req, res, next) {
  res.render('theconnector/2012-March/index');
});

router.get(['/2012-March/Enlisting-CFD-Fight-Against-Ballast-Water-Borne-Organisms', '/2012-March/Enlisting-CFD-Fight-Against-Ballast-Water-Borne-Organisms.html'], function(req, res, next) {
  res.render('theconnector/2012-March/Enlisting-CFD-Fight-Against-Ballast-Water-Borne-Organisms');
});

router.get(['/2012-March/Minimum-Linux-Requirements-Upgraded-Pointwise', '/2012-March/Minimum-Linux-Requirements-Upgraded-Pointwise.html'], function(req, res, next) {
  res.render('theconnector/2012-March/Minimum-Linux-Requirements-Upgraded-Pointwise');
});

router.get(['/2012-March/Pointwise-Used-Structured-Mesh-Submarine-Sail-Design', '/2012-March/Pointwise-Used-Structured-Mesh-Submarine-Sail-Design.html'], function(req, res, next) {
  res.render('theconnector/2012-March/Pointwise-Used-Structured-Mesh-Submarine-Sail-Design');
});

router.get(['/2012-March/Wikki-Australia-Pointwise-Newest-Distributor', '/2012-March/Wikki-Australia-Pointwise-Newest-Distributor.html'], function(req, res, next) {
  res.render('theconnector/2012-March/Wikki-Australia-Pointwise-Newest-Distributor');
});

// 2012 July
router.get(['/2012-July/', '/2012-July/index.html'], function(req, res, next) {
  res.render('theconnector/2012-July/index');
});

router.get(['/2012-July/From-CAD-CFD-Five-Minutes', '/2012-July/From-CAD-CFD-Five-Minutes.html'], function(req, res, next) {
  res.render('theconnector/2012-July/From-CAD-CFD-Five-Minutes');
});

router.get(['/2012-July/Pointwise-CT-Core-Technologies-Partner-Native-CAD-Readers', '/2012-July/Pointwise-CT-Core-Technologies-Partner-Native-CAD-Readers.html'], function(req, res, next) {
  res.render('theconnector/2012-July/Pointwise-CT-Core-Technologies-Partner-Native-CAD-Readers');
});

router.get(['/2012-July/Pointwise-Sponsors-Young-Engineers-SAE-Collegiate-Design-Competitions', '/2012-July/Pointwise-Sponsors-Young-Engineers-SAE-Collegiate-Design-Competitions.html'], function(req, res, next) {
  res.render('theconnector/2012-July/Pointwise-Sponsors-Young-Engineers-SAE-Collegiate-Design-Competitions');
});

router.get(['/2012-July/Theres-More-Than-One-Way-Skin-Block', '/2012-July/Theres-More-Than-One-Way-Skin-Block.html'], function(req, res, next) {
  res.render('theconnector/2012-July/Theres-More-Than-One-Way-Skin-Block');
});

// 2012 January 
router.get(['/2012-January/', '/2012-January/index.html'], function(req, res, next) {
  res.render('theconnector/2012-January/index');
});

router.get(['/2012-January/Meshing-Centrifugal-Stages-CFD-FEA-Pointwise', '/2012-January/Meshing-Centrifugal-Stages-CFD-FEA-Pointwise.html'], function(req, res, next) {
  res.render('theconnector/2012-January/Meshing-Centrifugal-Stages-CFD-FEA-Pointwise');
});

router.get(['/2012-January/Pointwise-Aids-Flight-Experiment-Ground-Based-Research-SCRAMSPACE', '/2012-January/Pointwise-Aids-Flight-Experiment-Ground-Based-Research-SCRAMSPACE.html'], function(req, res, next) {
  res.render('theconnector/2012-January/Pointwise-Aids-Flight-Experiment-Ground-Based-Research-SCRAMSPACE');
});

router.get(['/2012-January/Pointwise-Sponsors-SAE-Aero-Design-2012-Competition', '/2012-January/Pointwise-Sponsors-SAE-Aero-Design-2012-Competition.html'], function(req, res, next) {
  res.render('theconnector/2012-January/Pointwise-Sponsors-SAE-Aero-Design-2012-Competition');
});

router.get(['/2012-January/Seamlessly-Working-Native-CAD-Data', '/2012-January/Seamlessly-Working-Native-CAD-Data.html'], function(req, res, next) {
  res.render('theconnector/2012-January/Seamlessly-Working-Native-CAD-Data');
});

// 2012 December Special
router.get(['/2012-December-Special/', '/2012-December-Special/index.html'], function(req, res, next) {
  res.render('theconnector/2012-December-Special/index');
});

router.get(['/2012-December-Special/Compete-Meshy-Award-Prove-Your-Mesh-Best', '/2012-December-Special/Compete-Meshy-Award-Prove-Your-Mesh-Best.html'], function(req, res, next) {
  res.render('theconnector/2012-December-Special/Compete-Meshy-Award-Prove-Your-Mesh-Best');
});

router.get(['/2012-December-Special/Pointwise-Version-171', '/2012-December-Special/Pointwise-Version-171.html'], function(req, res, next) {
  res.render('theconnector/2012-December-Special/Pointwise-Version-171');
});

// 2012 August Special
router.get(['/2012-August-Special/', '/2012-August-Special/index.html'], function(req, res, next) {
  res.render('theconnector/2012-August-Special/index');
});

router.get(['/2012-August-Special/CFD-Consulting-Services-Experience-Finding-Solutions', '/2012-August-Special/CFD-Consulting-Services-Experience-Finding-Solutions.html'], function(req, res, next) {
  res.render('theconnector/2012-August-Special/CFD-Consulting-Services-Experience-Finding-Solutions');
});

router.get(['/2012-August-Special/Gridgen-Version-1518', '/2012-August-Special/Gridgen-Version-1518.html'], function(req, res, next) {
  res.render('theconnector/2012-August-Special/Gridgen-Version-1518');
});

router.get(['/2012-August-Special/Pointwise-Version-170-R2', '/2012-August-Special/Pointwise-Version-170-R2.html'], function(req, res, next) {
  res.render('theconnector/2012-August-Special/Pointwise-Version-170-R2');
});

// 2011 September
router.get(['/2011-September/', '/2011-September/index.html'], function(req, res, next) {
  res.render('theconnector/2011-September/index');
});

router.get(['/2011-September/Meshing-Vital-Formula-SAE-UTA', '/2011-September/Meshing-Vital-Formula-SAE-UTA.html'], function(req, res, next) {
  res.render('theconnector/2011-September/Meshing-Vital-Formula-SAE-UTA');
});

router.get(['/2011-September/New-Meshing-Capabilities-Coming-Pointwise-Version-17', '/2011-September/New-Meshing-Capabilities-Coming-Pointwise-Version-17.html'], function(req, res, next) {
  res.render('theconnector/2011-September/New-Meshing-Capabilities-Coming-Pointwise-Version-17');
});

router.get(['/2011-September/Pointwise-Aids-Hypersonic-CFD-University-Queensland', '/2011-September/Pointwise-Aids-Hypersonic-CFD-University-Queensland.html'], function(req, res, next) {
  res.render('theconnector/2011-September/Pointwise-Aids-Hypersonic-CFD-University-Queensland');
});

router.get(['/2011-September/Presenters-Named-Pointwise-User-Group-Meeting', '/2011-September/Presenters-Named-Pointwise-User-Group-Meeting.html'], function(req, res, next) {
  res.render('theconnector/2011-September/Presenters-Named-Pointwise-User-Group-Meeting');
});

router.get(['/2011-September/T-Rex-Real-World-Troubleshooting-Difficult-Grids', '/2011-September/T-Rex-Real-World-Troubleshooting-Difficult-Grids.html'], function(req, res, next) {
  res.render('theconnector/2011-September/T-Rex-Real-World-Troubleshooting-Difficult-Grids');
});

// 2011 November
router.get(['/2011-November/', '/2011-November/index.html'], function(req, res, next) {
  res.render('theconnector/2011-November/index');
});

router.get(['/2011-November/2011-Pointwise-User-Group-Meeting-Record-Attendance-Pointwise-V17-Preview', '/2011-November/2011-Pointwise-User-Group-Meeting-Record-Attendance-Pointwise-V17-Preview.html'], function(req, res, next) {
  res.render('theconnector/2011-November/2011-Pointwise-User-Group-Meeting-Record-Attendance-Pointwise-V17-Preview');
});

router.get(['/2011-November/Diverse-Uses-Pointwise-Embry-Riddle', '/2011-November/Diverse-Uses-Pointwise-Embry-Riddle.html'], function(req, res, next) {
  res.render('theconnector/2011-November/Diverse-Uses-Pointwise-Embry-Riddle');
});

router.get(['/2011-November/New-Glyph-Scripting-Training-Course-Save-50-Percent', '/2011-November/New-Glyph-Scripting-Training-Course-Save-50-Percent.html'], function(req, res, next) {
  res.render('theconnector/2011-November/New-Glyph-Scripting-Training-Course-Save-50-Percent');
});

router.get(['/2011-November/Pointwise-Works-Make-Aircraft-Quieter', '/2011-November/Pointwise-Works-Make-Aircraft-Quieter.html'], function(req, res, next) {
  res.render('theconnector/2011-November/Pointwise-Works-Make-Aircraft-Quieter');
});

router.get(['/2011-November/Weir-American-Hydro-Comes-Up-to-Speed-Quickly', '/2011-November/Weir-American-Hydro-Comes-Up-to-Speed-Quickly.html'], function(req, res, next) {
  res.render('theconnector/2011-November/Weir-American-Hydro-Comes-Up-to-Speed-Quickly');
});

// 2011 May
router.get(['/2011-May/', '/2011-May/index.html'], function(req, res, next) {
  res.render('theconnector/2011-May/index');
});

router.get(['/2011-May/Coupling-CFD-Thermal-Analyses-Pointwise', '/2011-May/Coupling-CFD-Thermal-Analyses-Pointwise.html'], function(req, res, next) {
  res.render('theconnector/2011-May/Coupling-CFD-Thermal-Analyses-Pointwise');
});

router.get(['/2011-May/Meshing-Complex-CAD-Geometry-Using-Models-Quilts', '/2011-May/Meshing-Complex-CAD-Geometry-Using-Models-Quilts.html'], function(req, res, next) {
  res.render('theconnector/2011-May/Meshing-Complex-CAD-Geometry-Using-Models-Quilts');
});

router.get(['/2011-May/Save-Time-Geometry-Cleanup', '/2011-May/Save-Time-Geometry-Cleanup.html'], function(req, res, next) {
  res.render('theconnector/2011-May/Save-Time-Geometry-Cleanup');
});

router.get(['/2011-May/Top-8-Reasons-Attend-Pointwise-UGM-2011', '/2011-May/Top-8-Reasons-Attend-Pointwise-UGM-2011.html'], function(req, res, next) {
  res.render('theconnector/2011-May/Top-8-Reasons-Attend-Pointwise-UGM-2011');
});

// 2011 March
router.get(['/2011-March/', '/2011-March/index.html'], function(req, res, next) {
  res.render('theconnector/2011-March/index');
});

router.get(['/2011-March/Automating-Porous-Flow-Meshing-Glyph', '/2011-March/Automating-Porous-Flow-Meshing-Glyph.html'], function(req, res, next) {
  res.render('theconnector/2011-March/Automating-Porous-Flow-Meshing-Glyph');
});

router.get(['/2011-March/Pointwise-User-Group-Meeting-Call-for-Papers', '/2011-March/Pointwise-User-Group-Meeting-Call-for-Papers.html'], function(req, res, next) {
  res.render('theconnector/2011-March/Pointwise-User-Group-Meeting-Call-for-Papers');
});

router.get(['/2011-March/Sometimes-All-Your-Grid-Needs-Little-Tweak', '/2011-March/Sometimes-All-Your-Grid-Needs-Little-Tweak.html'], function(req, res, next) {
  res.render('theconnector/2011-March/Sometimes-All-Your-Grid-Needs-Little-Tweak');
});

// 2011 July
router.get(['/2011-July/', '/2011-July/index.html'], function(req, res, next) {
  res.render('theconnector/2011-July/index');
});

router.get(['/2011-July/CFD-Study-Semi-Covered-Wheels', '/2011-July/CFD-Study-Semi-Covered-Wheels.html'], function(req, res, next) {
  res.render('theconnector/2011-July/CFD-Study-Semi-Covered-Wheels');
});

router.get(['/2011-July/Come-to-Speed-Pointwise-User-Group-Meeting', '/2011-July/Come-to-Speed-Pointwise-User-Group-Meeting.html'], function(req, res, next) {
  res.render('theconnector/2011-July/Come-to-Speed-Pointwise-User-Group-Meeting');
});

router.get(['/2011-July/Modeling-Shipping-Container-Velocity-during-Tsunami-Conditions', '/2011-July/Modeling-Shipping-Container-Velocity-during-Tsunami-Conditions.html'], function(req, res, next) {
  res.render('theconnector/2011-July/Modeling-Shipping-Container-Velocity-during-Tsunami-Conditions');
});

router.get(['/2011-July/T-Rex-Hybrid-Meshing-Pointwise', '/2011-July/T-Rex-Hybrid-Meshing-Pointwise.html'], function(req, res, next) {
  res.render('theconnector/2011-July/T-Rex-Hybrid-Meshing-Pointwise');
});

// 2011 January
router.get(['/2011-January/Wind-Turbine-Micro-Siting-Analysis-Vestas-Wind-Systems', '/2011-January/Wind-Turbine-Micro-Siting-Analysis-Vestas-Wind-Systems.html'], function(req, res, next) {
  res.render('theconnector/2011-January/Wind-Turbine-Micro-Siting-Analysis-Vestas-Wind-Systems');
});

router.get(['/2011-January', '/2011-January/index.html'], function(req, res, next) {
  res.render('theconnector/2011-January/index');
});

module.exports = router;
