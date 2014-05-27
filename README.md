beers-filter-demo
=================

Stand-alone demo for simple beers filtering.

1. You'll need a db. I was using mysql, but any db will do. The /data directory contains the .csv files for the beer data. The app assumes the datasource name is "beers".
2. Written to run on Railo Jetty as a stand-alone app. You'll need some familiarity with dealing with Railo.
3. All it does is grab some data, dump it out, and allow for AngularJS to filter it.
4. I wrapped the data call in a $timeout delay to show someone how the data binding works, loading the data independently of the page load.
5. No warranties explicit or implied.
