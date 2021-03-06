import Dygraph from 'dygraphs';

g = new Dygraph(
    document.getElementById("graph1"),  // containing div
    "Date,Temperature\n" +                // the data series
    "2008-05-07,75\n" +
    "2008-05-08,70\n" +
    "2008-05-09,80\n",
    { }                                   // the options
);