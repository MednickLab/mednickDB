define({ "api": [
  {
    "type": "get",
    "url": "/Screenings",
    "title": "Request all screening records",
    "name": "Screenings",
    "group": "DataTable",
    "version": "0.0.0",
    "filename": "routes/dataTable_Routes.js",
    "groupTitle": "DataTable"
  },
  {
    "type": "get",
    "url": "/SleepScores",
    "title": "Request all sleepscoring records",
    "name": "SleepScores",
    "group": "DataTable",
    "version": "0.0.0",
    "filename": "routes/dataTable_Routes.js",
    "groupTitle": "DataTable"
  },
  {
    "type": "get",
    "url": "/DeletedFiles",
    "title": "Get all deleted file records",
    "name": "GetDeletedFiles",
    "group": "Files_Browse",
    "description": "<p>Retrieve all deleted (expired) FileUpload records. Returns deteled fileupload records, not the file objects stored in fileserver. Places files in RECYCLE_BIN dir.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/DeletedFiles",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   [\n       {\n           \"_id\": \"597716d55c296c2418a0a74f\",\n           \"filename\": \"LSD Demographics.xlsx\",\n           \"expired\": \"1\",\n           \"uploadedBy\": \"stude001@ucr.edu\",\n           \"complete\": \"0\",\n           \"path\": \"C:\\\\source\\\\mednickdb\\\\server\\\\uploads\\\\temp\\\\LSD Demographics.xlsx\",\n           \"dateUploaded\": 1500976853428\n       },\n       {\n           \"_id\": \"597716e15c296c2418a0a750\",\n           \"filename\": \"NP_ScreeningQuestionnaire_MASTER.xlsx\",\n           \"expired\": \"1\",\n           \"uploadedBy\": \"stude001@ucr.edu\",\n           \"complete\": \"0\",\n           \"path\": \"C:\\\\source\\\\mednickdb\\\\server\\\\uploads\\\\temp\\\\NP_ScreeningQuestionnaire_MASTER.xlsx\",\n           \"dateUploaded\": 1500976865929\n       }\n   ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "Files_Browse"
  },
  {
    "type": "get",
    "url": "/DocumentTypes",
    "title": "Request all unique DocumentTypes",
    "name": "GetDocumentTypes",
    "group": "Files_Browse",
    "description": "<p>Retrieve a list of unique study IDs from all documents logged in DB.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/DocumentTypes",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n          [\n            \"doctype1\",\n            \"doctype2\",\n            \"doctype3\",\n            \"doctype4\"\n           ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "Files_Browse"
  },
  {
    "type": "get",
    "url": "/File",
    "title": "Get file record, by ID",
    "name": "GetFile",
    "group": "Files_Browse",
    "description": "<p>Retrieve FileUpload record, matching ID param. Returns matching fileupload record, not the file object stored in fileserver.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique string, created by DB at time of insertion.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/File?id=5977072b60950c2778cd2d33",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"_id\": \"5977072b60950c2778cd2d33\",\n    \"study\": \"study4\",\n    \"visit\": \"visit1\",\n    \"session\": \"session1\",\n    \"doctype\": \"screening\",\n    \"filename\": \"SF2014_ScreeningQuestionnaire_MASTER.xlsx\",\n    \"expired\": \"0\",\n    \"uploadedBy\": \"stude001@ucr.edu\",\n    \"complete\": \"1\",\n    \"path\": \"C:\\\\source\\\\mednickdb\\\\server\\\\uploads\\\\mednickFileSystem\\\\study4\\\\visit1\\\\session1\\\\screening\\\\SF2014_ScreeningQuestionnaire_MASTER.xlsx\",\n    \"dateUploaded\": 1500972843113\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "Files_Browse"
  },
  {
    "type": "get",
    "url": "/Files",
    "title": "Get all complete file records",
    "name": "GetFiles",
    "group": "Files_Browse",
    "description": "<p>Retrieve all FileUpload records, that are complete with study, visit, session, and doctype metadata. Returns fileupload records, not the file objects stored in fileserver.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "study",
            "defaultValue": "Null",
            "description": "<p>Study param is independent of other params.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "visit",
            "defaultValue": "Null",
            "description": "<p>Visit param will be ignored, if a study param is not provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "session",
            "defaultValue": "Null",
            "description": "<p>Session param will be ignored, if a visit param is not provided.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "doctype",
            "defaultValue": "Null",
            "description": "<p>DocType param is independent of other params.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "w/Parameters:",
        "content": "http://localhost/Files?study=study4&visit=visit1&session=session1&doctype=screening",
        "type": "json"
      },
      {
        "title": "w/o Parameters:",
        "content": "http://localhost/Files",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Response (w/params):",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"_id\": \"5977072b60950c2778cd2d33\",\n        \"study\": \"study4\",\n        \"visit\": \"visit1\",\n        \"session\": \"session1\",\n        \"doctype\": \"screening\",\n        \"filename\": \"SF2014_ScreeningQuestionnaire_MASTER.xlsx\",\n        \"expired\": \"0\",\n        \"uploadedBy\": \"stude001@ucr.edu\",\n        \"complete\": \"1\",\n        \"path\": \"C:\\\\source\\\\mednickdb\\\\server\\\\uploads\\\\mednickFileSystem\\\\study4\\\\visit1\\\\session1\\\\screening\\\\SF2014_ScreeningQuestionnaire_MASTER.xlsx\",\n        \"dateUploaded\": 1500972843113\n    }\n]",
          "type": "json"
        },
        {
          "title": "Response (w/o params):",
          "content": "HTTP/1.1 200 OK\n[\n    {\n        \"_id\": \"5977072b60950c2778cd2d33\",\n        \"study\": \"study4\",\n        \"visit\": \"visit1\",\n        \"session\": \"session1\",\n        \"doctype\": \"screening\",\n        \"filename\": \"SF2014_ScreeningQuestionnaire_MASTER.xlsx\",\n        \"expired\": \"0\",\n        \"uploadedBy\": \"stude001@ucr.edu\",\n        \"complete\": \"1\",\n        \"path\": \"C:\\\\source\\\\mednickdb\\\\server\\\\uploads\\\\mednickFileSystem\\\\study4\\\\visit1\\\\session1\\\\screening\\\\SF2014_ScreeningQuestionnaire_MASTER.xlsx\",\n        \"dateUploaded\": 1500972843113\n    },\n    {\n        \"_id\": \"5977073360950c2778cd2d34\",\n        \"study\": \"study1\",\n        \"visit\": \"visit1\",\n        \"session\": \"session1\",\n        \"doctype\": \"screening\",\n        \"filename\": \"SF2014_ScreeningQuestionnaire_MASTER.xlsx\",\n        \"expired\": \"0\",\n        \"uploadedBy\": \"stude001@ucr.edu\",\n        \"complete\": \"1\",\n        \"path\": \"C:\\\\source\\\\mednickdb\\\\server\\\\uploads\\\\mednickFileSystem\\\\study4\\\\visit1\\\\session1\\\\screening\\\\SF2014_ScreeningQuestionnaire_MASTER.xlsx\",\n        \"dateUploaded\": 1500972843113\n    }\n]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "Files_Browse"
  },
  {
    "type": "get",
    "url": "/Sessions",
    "title": "Request all unique session IDs",
    "name": "GetSessions",
    "group": "Files_Browse",
    "description": "<p>Retrieve a list of unique session IDs from all documents logged in DB. Because Session IDs may overlap across different studies, study ID and visit ID params are neccesary for reference.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "study",
            "description": "<p>Study ID. Neccesary for &quot;complete&quot; upload.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "visit",
            "description": "<p>VISIT ID. Neccesary for &quot;complete&quot; upload.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/Sessions?study=study1&visit=visit1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n          [\n            \"session1\",\n            \"session2\",\n            \"session3\",\n            \"session4\"\n           ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "Files_Browse"
  },
  {
    "type": "get",
    "url": "/Studies",
    "title": "Request all unique study IDs",
    "name": "GetStudies",
    "group": "Files_Browse",
    "description": "<p>Retrieve a list of unique study IDs from all documents logged in DB.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/Studies",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n          [\n            \"study4\",\n            \"study1\",\n            \"study2\",\n            \"study3\"\n           ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "Files_Browse"
  },
  {
    "type": "get",
    "url": "/TempFiles",
    "title": "Request all incomplete file records",
    "name": "GetTempFiles",
    "group": "Files_Browse",
    "description": "<p>Retrieve all FileUpload records, that have incomplete metadata. Returns fileupload records, not the file objects stored in fileserver.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/TempFiles",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n   [\n       {\n           \"_id\": \"597716d55c296c2418a0a74f\",\n           \"filename\": \"LSD Demographics.xlsx\",\n           \"expired\": \"0\",\n           \"uploadedBy\": \"stude001@ucr.edu\",\n           \"complete\": \"0\",\n           \"path\": \"C:\\\\source\\\\mednickdb\\\\server\\\\uploads\\\\temp\\\\LSD Demographics.xlsx\",\n           \"dateUploaded\": 1500976853428\n       },\n       {\n           \"_id\": \"597716e15c296c2418a0a750\",\n           \"filename\": \"NP_ScreeningQuestionnaire_MASTER.xlsx\",\n           \"expired\": \"0\",\n           \"uploadedBy\": \"stude001@ucr.edu\",\n           \"complete\": \"0\",\n           \"path\": \"C:\\\\source\\\\mednickdb\\\\server\\\\uploads\\\\temp\\\\NP_ScreeningQuestionnaire_MASTER.xlsx\",\n           \"dateUploaded\": 1500976865929\n       }\n   ]",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "Files_Browse"
  },
  {
    "type": "get",
    "url": "/Visits",
    "title": "Request all unique visit IDs",
    "name": "GetVisits",
    "group": "Files_Browse",
    "description": "<p>Retrieve a list of unique visit IDs from all documents logged in DB. Because VISIT IDs may overlap across different studies, a Study ID param is neccesary for reference.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "study",
            "description": "<p>Study ID needed to avoid overlapping/duplicate visit IDs.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/Visits?study=study1",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n    {\n          [\n            \"visit1\",\n            \"visit2\",\n            \"visit3\",\n            \"visit4\"\n           ]\n    }",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/documentBrowse_Routes.js",
    "groupTitle": "Files_Browse"
  },
  {
    "type": "post",
    "url": "/DeleteFile",
    "title": "Delete file record",
    "name": "PostDeleteFile",
    "group": "Files_Delete",
    "description": "<p>Used to update metada, or complete a fileupload record entry. Provide document ID in URL, and values in request body.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique string, created by DB at time of insertion.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/DeleteFile",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"ok\": 1,\n    \"nModified\": 1,\n    \"n\": 1,\n    \"opTime\": {\n        \"ts\": \"6447281906034671618\",\n        \"t\": 2\n    },\n    \"electionId\": \"7fffffff0000000000000002\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/documentDelete_Routes.js",
    "groupTitle": "Files_Delete"
  },
  {
    "type": "get",
    "url": "/DownloadFile",
    "title": "Fetch file-object, by ID",
    "name": "GetDownloadFile",
    "group": "Files_Download",
    "description": "<p>Returns file object, matching ID param.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique string, created by DB at time of insertion.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/DownloadFile?id=5977072b60950c2778cd2d33",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    <FILE OBJECT>\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/documentDownload_Routes.js",
    "groupTitle": "Files_Download"
  },
  {
    "type": "post",
    "url": "/UpdateFile/:id",
    "title": "Update metadata for a file",
    "name": "PostUpdateFile",
    "group": "Files_Update",
    "description": "<p>Used to update metada, or complete a fileupload record entry. Provide document ID in URL, and values in request body.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Unique string, created by DB at time of insertion.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "keyToUpdate",
            "description": "<p>Provide all key value paiors to update. Keys will be created if neccesary.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/UpdateFile/59794d97e2bb5e2408584d86",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": " HTTP/1.1 200 OK\n{\n    \"ok\": 1,\n    \"nModified\": 1,\n    \"n\": 1,\n    \"opTime\": {\n        \"ts\": \"6447281906034671618\",\n        \"t\": 2\n    },\n    \"electionId\": \"7fffffff0000000000000002\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/documentUpdate_Routes.js",
    "groupTitle": "Files_Update"
  },
  {
    "type": "post",
    "url": "/UploadFile",
    "title": "Upload a new file",
    "name": "PostUploadFile",
    "group": "Files_Upload",
    "description": "<p>CompleteFileDir = &quot;/study/visit/session/doctype/filename.ext&quot;</p> <p>TempFileDir = &quot;/temp/filename.ext&quot;</p> <p>Single uploads, with &quot;study&quot;, &quot;visit&quot;, &quot;session&quot;, and &quot;doctype&quot; provided in request, will be stored in CompleteFileDir.</p> <p>Single uploads, with &quot;study&quot;, &quot;visit&quot;, &quot;session&quot;, or &quot;doctype&quot; missing in request, will be stored in TempFileDir.</p> <p>Bulk uploads apply same metada to all files in object-array and are automatically placed in TempFileDir.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object",
            "optional": false,
            "field": "docfile",
            "description": "<p>File object (or array of file objects) that will be uploaded.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "study",
            "defaultValue": "Null",
            "description": "<p>Study ID. Neccesary for &quot;complete&quot; upload.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "visit",
            "defaultValue": "Null",
            "description": "<p>Visit ID. Neccesary for &quot;complete&quot; upload.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "session",
            "defaultValue": "Null",
            "description": "<p>Session ID. Neccesary for &quot;complete&quot; upload.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "doctype",
            "defaultValue": "Null",
            "description": "<p>Doctype ID. Neccesary for &quot;complete&quot; upload.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "notes",
            "defaultValue": "Null",
            "description": "<p>Notes, text field.</p>"
          }
        ]
      }
    },
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/FileUpload",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n   \"result\": {\n       \"ok\": 1,\n       \"n\": 1,\n       \"opTime\": {\n           \"ts\": \"6446619355789656066\",\n           \"t\": 2\n       }\n   },\n   \"ops\": [\n       {\n           \"study\": \"study4\",\n           \"visit\": \"visit1\",\n           \"session\": \"session1\",\n           \"doctype\": \"screening\",\n           \"filename\": \"SF2014_ScreeningQuestionnaire_MASTER.xlsx\",\n           \"expired\": \"0\",\n           \"uploadedBy\": \"stude001@ucr.edu\",\n           \"complete\": \"1\",\n           \"path\": \"C:\\\\source\\\\mednickdb\\\\server\\\\uploads\\\\mednickFileSystem\\\\study4\\\\visit1\\\\session1\\\\screening\\\\SF2014_ScreeningQuestionnaire_MASTER.xlsx\",\n           \"dateUploaded\": 1500970536176,\n           \"_id\": \"5976fe28f9b6021654b762bb\"\n       }\n   ],\n   \"insertedCount\": 1,\n   \"insertedIds\": [\n       \"5976fe28f9b6021654b762bb\"\n   ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/documentUpload_Routes.js",
    "groupTitle": "Files_Upload"
  },
  {
    "type": "post",
    "url": "/NewFileRecord",
    "title": "Create new record in DB for an unlogged file",
    "name": "PostNewFileRecord",
    "group": "Microservices",
    "description": "<p>Creates a new FileUpload record with complete=0. Main use is for python microservice that scans tree for unlogged files.</p>",
    "examples": [
      {
        "title": "Example usage:",
        "content": "http://localhost/NewFileRecord",
        "type": "json"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 201 Created\n{\n    \"result\": {\n        \"ok\": 1,\n        \"n\": 1,\n        \"opTime\": {\n            \"ts\": \"6446683947802820611\",\n            \"t\": 2\n        }\n    },\n    \"ops\": [\n        {\n            \"filename\": \"testFileName\",\n            \"path\": \"testPath\",\n            \"expired\": \"testExpired\",\n            \"complete\": \"0\",\n            \"dateUploaded\": 1500985574333,\n            \"_id\": \"597738e658c1842420688aa9\"\n        }\n    ],\n    \"insertedCount\": 1,\n    \"insertedIds\": [\n        \"597738e658c1842420688aa9\"\n    ]\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/microservice_Routes.js",
    "groupTitle": "Microservices"
  },
  {
    "type": "post",
    "url": "/Screenings",
    "title": "Post new screening record",
    "name": "PostScreenings",
    "group": "Microservices",
    "version": "0.0.0",
    "filename": "routes/microservice_Routes.js",
    "groupTitle": "Microservices"
  },
  {
    "type": "post",
    "url": "/TaskData",
    "title": "Post new TaskData record",
    "name": "PostTaskData",
    "group": "Microservices",
    "version": "0.0.0",
    "filename": "routes/microservice_Routes.js",
    "groupTitle": "Microservices"
  },
  {
    "type": "post",
    "url": "/UpdateParsedStatus",
    "title": "Update \"parsed\" status for a file",
    "name": "PostUpdateParsedStatus",
    "group": "Microservices",
    "version": "0.0.0",
    "filename": "routes/microservice_Routes.js",
    "groupTitle": "Microservices"
  }
] });
