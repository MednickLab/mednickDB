define({ "api": [
  {
    "type": "get",
    "url": "/screenings",
    "title": "Request all screening records",
    "name": "Screenings",
    "group": "DataTable",
    "version": "0.0.0",
    "filename": "routes/dataTable_Routes.js",
    "groupTitle": "DataTable"
  },
  {
    "type": "get",
    "url": "/sleepScores",
    "title": "Request all sleepscoring records",
    "name": "SleepScores",
    "group": "DataTable",
    "version": "0.0.0",
    "filename": "routes/dataTable_Routes.js",
    "groupTitle": "DataTable"
  },
  {
    "type": "get",
    "url": "/DocumentTypes",
    "title": "Request all unique DocumentTypes",
    "name": "GetDocumentTypes",
    "group": "DocumentBrowse",
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "DocumentBrowse"
  },
  {
    "type": "get",
    "url": "/File",
    "title": "Request fileupload record by ID",
    "name": "GetFile",
    "group": "DocumentBrowse",
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "DocumentBrowse"
  },
  {
    "type": "get",
    "url": "/Files",
    "title": "Request all complete fileupload records",
    "name": "GetFiles",
    "group": "DocumentBrowse",
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "DocumentBrowse"
  },
  {
    "type": "get",
    "url": "/Sessions",
    "title": "Request all unique session IDs",
    "name": "GetSessions",
    "group": "DocumentBrowse",
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "DocumentBrowse"
  },
  {
    "type": "get",
    "url": "/Studies",
    "title": "Request all unique study IDs",
    "name": "GetStudies",
    "group": "DocumentBrowse",
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "DocumentBrowse"
  },
  {
    "type": "get",
    "url": "/TempFiles",
    "title": "Request all incomplete FILEUPLOAD records",
    "name": "GetTempFiles",
    "group": "DocumentBrowse",
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "DocumentBrowse"
  },
  {
    "type": "get",
    "url": "/Visits",
    "title": "Request all unique visit IDs",
    "name": "GetVisits",
    "group": "DocumentBrowse",
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "DocumentBrowse"
  },
  {
    "type": "post",
    "url": "/UpdateParsedStatus",
    "title": "Update \"parsed\" for fileupload by ID",
    "name": "PostUpdateParsedStatus",
    "group": "DocumentUpdate",
    "version": "0.0.0",
    "filename": "routes/documentUpdate_Routes.js",
    "groupTitle": "DocumentUpdate"
  },
  {
    "type": "post",
    "url": "/FileUpload",
    "title": "Upload new file",
    "name": "PostFileUpload",
    "group": "DocumentUpload",
    "version": "0.0.0",
    "filename": "routes/documentUpload_Routes.js",
    "groupTitle": "DocumentUpload"
  },
  {
    "type": "post",
    "url": "/NewTempFile",
    "title": "Create new record for incomplete file",
    "name": "PostNewTempFile",
    "group": "DocumentUpload",
    "version": "0.0.0",
    "filename": "routes/documentUpload_Routes.js",
    "groupTitle": "DocumentUpload"
  },
  {
    "type": "post",
    "url": "/Screenings",
    "title": "Post new screening records",
    "name": "PostScreenings",
    "group": "InsertData",
    "version": "0.0.0",
    "filename": "routes/insertData_Routes.js",
    "groupTitle": "InsertData"
  }
] });
