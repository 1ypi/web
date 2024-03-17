var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opener = _____WB$wombat$assign$function_____("opener");

var obj = JSON.parse($response.body);

obj= {
  "result" : {
    "result" : "success",
    "msTime" : 1670593113048,
    "accountCreatedMillis" : null,
    "licenses" : [
      {
        "productId" : "alightcreative.motion.1y_1y_t10",
        "label" : null,
        "benefits" : [
          "RemoveWatermark",
          "MemberEffects",
          "ProjectPackageSharing",
          "FutureMemberFeatures",
          "AdvancedEasing",
          "CameraObjects",
          "LayerParenting"
        ],
        "period" : "1y",
        "valid" : true,
        "expires" : 1699389411000,
        "details" : null,
        "type" : "subscription",
        "autoRenewing" : true,
        "orderNumber" : "320001035735292",
        "linkStatus" : "linked-nologin",
        "store" : "apple_app_store"
      }
    ],
    "warnings" : [

    ]
  }
}



$done({body: JSON.stringify(obj)});

}
