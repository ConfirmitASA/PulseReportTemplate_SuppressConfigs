class SuppressConfig {

    //================================================================================
    // DATA SUPPRESSION (more info: SuppressUtil)
    //================================================================================

    static var ReportBaseSuppressValue = 5;  // Min number of responses (response = question specified below in Survey Config -> Response: {qId: 'status', codes: ['complete']})

    static var TableSuppressValue = 5;        // Min number of answers in the Aggregated Table
    static var VerbatimSuppressValue = 5;     // Min number of answers in the Verbatim Table
    static var CommentSuppressValue = 20;      // Min number of answers in the Hitlist
    static var CategoricalSuppressValue = 5; // Min number of answers for cards on the Categorical page
    static var BenchamrkSuppressValue = 5; // Min number of answers for benchmark value to be shown in Results table

    // minGap: min difference between neighbour units
    // unitSufficientBase: min number of the responses when a unit is always shown irrespective of <minGap> requirement
    static var HierarchySuppress = { minGap: 0, unitSufficientBase: 20};

}
