import{c as reactFactory,r as jsxFactory,u as interop}from"/assets/useRouter-80ermfqe.js";
import{component as OriginalRoute}from"/assets/_-CP1N1Lhi.js?orig=1";

const React=interop(reactFactory(),1);
const J=jsxFactory();

const integrations=[
  "Import Business Structures — Universal",
  "Import People Records — Universal",
  "Export Payroll — Universal",
  "Export Payroll Based Journal",
  "Import Schedules — Universal",
  "Export Schedules — Universal",
  "Import Punches — Universal",
  "Export Punches — Universal",
  "Import Accruals — Universal",
  "Export Accruals — Universal"
];

const runs=[
  ["Export Payroll — Universal 09/25/2026 14:00","Export","Completed",4281,0],
  ["Import People Records — Universal 09/25/2026 12:18","Import","Completed",16,0],
  ["Import Punches — Universal 09/25/2026 10:32","Import","Completed with Errors",87,2],
  ["Export Schedules — Universal 09/24/2026 23:00","Export","Completed",112,0],
  ["Import Accruals — Universal 09/24/2026 18:10","Import","Failed",24,4]
];

const inputClass="h-8 rounded-sm border border-line bg-paper px-2 text-[11px] outline-none focus:border-teal";

function Button(props){
  return J.jsx("button",{
    type:"button",
    onClick:props.onClick,
    className:"h-8 rounded-sm border px-3 text-[11px] font-medium "+(props.primary?"border-teal bg-teal text-paper":"border-line bg-paper hover:bg-canvas"),
    children:props.children
  });
}

function Status(props){
  var cls="text-teal";
  if(props.value==="Completed") cls="text-ok";
  if(props.value==="Failed") cls="text-danger";
  if(props.value==="Completed with Errors") cls="text-warn";
  return J.jsx("span",{className:"rounded-full border border-line px-2 py-0.5 text-[10px] "+cls,children:props.value});
}

function IntegrationsPage(){
  const stateView=React.useState("past"),view=stateView[0],setView=stateView[1];
  const stateQuery=React.useState(""),query=stateQuery[0],setQuery=stateQuery[1];
  const stateDrawer=React.useState(null),drawer=stateDrawer[0],setDrawer=stateDrawer[1];
  const statePick=React.useState(integrations[0]),pick=statePick[0],setPick=statePick[1];

  const filtered=runs.filter(function(row){
    if(!query) return true;
    var q=query.toLowerCase();
    return row[0].toLowerCase().indexOf(q)>=0||row[2].toLowerCase().indexOf(q)>=0;
  });

  return J.jsxs("div",{className:"relative flex h-full flex-col bg-paper",children:[
    J.jsxs("div",{className:"flex h-10 items-center gap-2 border-b border-line px-3 text-[11px]",children:[
      J.jsx("span",{className:"text-muted",children:"Maintenance"}),J.jsx("span",{children:">"}),J.jsx("b",{children:"Integrations"})
    ]}),
    J.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-line bg-canvas px-3 py-2",children:[
      J.jsx(Button,{onClick:function(){setDrawer("menu")},children:"Run Processes ▾"}),
      J.jsx(Button,{children:"Grid View"}),
      J.jsx(Button,{onClick:function(){var e=document.getElementById("integration-refine");if(e)e.focus()},children:"Refine"}),
      J.jsx(Button,{primary:true,onClick:function(){setDrawer("select")},children:"Run an Integration"}),
      J.jsx(Button,{onClick:function(){setDrawer("xref")},children:"Reference Tables"}),
      J.jsx("span",{className:"flex-1"}),
      J.jsx(Button,{children:"Refresh"})
    ]}),
    J.jsxs("div",{className:"flex gap-2 border-b border-line px-3 py-2",children:[
      J.jsxs("select",{className:inputClass+" w-[235px]",value:view,onChange:function(e){setView(e.target.value)},children:[
        J.jsx("option",{value:"past",children:"Past Integration Runs"}),
        J.jsx("option",{value:"scheduled",children:"Scheduled Integration Requests"})
      ]}),
      J.jsx("input",{id:"integration-refine",className:inputClass+" w-[280px]",placeholder:"Refine by name, status, type, or user",value:query,onChange:function(e){setQuery(e.target.value)}}),
      J.jsxs("select",{className:inputClass+" w-[170px]",children:[J.jsx("option",{children:"Past 4 Days"}),J.jsx("option",{children:"Past 7 Days"}),J.jsx("option",{children:"Beginning of Time"})]})
    ]}),
    J.jsx("div",{className:"wfm-scroll flex-1 overflow-auto",children:view==="past"?
      J.jsxs("table",{className:"w-full min-w-[900px] text-[11px]",children:[
        J.jsx("thead",{className:"sticky top-0 bg-canvas",children:J.jsx("tr",{children:["Integration Run Name","Type","Started","User","Status","Records","Errors",""].map(function(h){return J.jsx("th",{className:"border-b border-line px-3 py-2 text-left",children:h},h)})})}),
        J.jsx("tbody",{children:filtered.map(function(row,i){return J.jsxs("tr",{className:"border-b border-line hover:bg-canvas",children:[
          J.jsx("td",{className:"px-3 py-2",children:J.jsx("button",{className:"font-medium text-teal hover:underline",onClick:function(){setDrawer("summary")},children:row[0]})}),
          J.jsx("td",{className:"px-3 py-2",children:row[1]}),
          J.jsx("td",{className:"px-3 py-2",children:"09/25/2026"}),
          J.jsx("td",{className:"px-3 py-2",children:i?"Administrator":"System"}),
          J.jsx("td",{className:"px-3 py-2",children:J.jsx(Status,{value:row[2]})}),
          J.jsx("td",{className:"px-3 py-2",children:row[3]}),
          J.jsx("td",{className:"px-3 py-2",children:row[4]}),
          J.jsx("td",{className:"px-3 py-2 text-right",children:J.jsx("button",{className:"text-teal hover:underline",onClick:function(){setDrawer("run")},children:"Re-Run"})})
        ]},i)})})
      ]}):
      J.jsxs("table",{className:"w-full text-[11px]",children:[
        J.jsx("thead",{className:"bg-canvas",children:J.jsx("tr",{children:["Request Schedule","Integration","Next Run","Status","User"].map(function(h){return J.jsx("th",{className:"border-b border-line px-3 py-2 text-left",children:h},h)})})}),
        J.jsx("tbody",{children:[
          ["Nightly People Import","Import People Records — Universal","09/26/2026 1:00 AM","Scheduled"],
          ["Weekly Payroll Export","Export Payroll — Universal","09/25/2026 6:00 PM","Scheduled"],
          ["Legacy Punch Load","Import Punches — Universal","—","Scheduled but Deleted"]
        ].map(function(row,i){return J.jsxs("tr",{className:"border-b border-line",children:[
          J.jsx("td",{className:"px-3 py-2",children:row[0]}),J.jsx("td",{className:"px-3 py-2",children:row[1]}),J.jsx("td",{className:"px-3 py-2",children:row[2]}),J.jsx("td",{className:"px-3 py-2",children:J.jsx(Status,{value:row[3]})}),J.jsx("td",{className:"px-3 py-2",children:"System"})
        ]},i)})})
      ]})
    }),
    drawer?J.jsxs("div",{className:"absolute inset-0 z-[90] flex justify-end bg-ink/25",children:[
      J.jsx("button",{className:"flex-1",onClick:function(){setDrawer(null)},"aria-label":"Close"}),
      J.jsxs("div",{className:"flex h-full w-full max-w-[450px] flex-col border-l border-line bg-paper shadow-xl",children:[
        J.jsxs("div",{className:"flex h-12 items-center border-b border-line px-4",children:[
          J.jsx("b",{className:"flex-1",children:drawer==="select"?"Select Integration":drawer==="run"?"Run an Integration":drawer==="summary"?"Run Summary":drawer==="xref"?"Cross-Reference Tables":"Run Processes"}),
          J.jsx("button",{onClick:function(){setDrawer(null)},children:"×"})
        ]}),
        J.jsx("div",{className:"wfm-scroll flex-1 overflow-auto p-4",children:
          drawer==="select"?J.jsxs("div",{children:[
            J.jsx("div",{className:"mb-2 text-[10px] font-semibold text-muted",children:"INTEGRATIONS"}),
            integrations.map(function(name){return J.jsx("button",{className:"block w-full border-b border-line px-2 py-2.5 text-left text-[12px] text-teal hover:bg-canvas",onClick:function(){setPick(name);setDrawer("run")},children:name},name)}),
            J.jsx("div",{className:"mt-4 border-t border-line pt-3 text-[10px] font-semibold text-muted",children:"INTEGRATION SETS"})
          ]}):
          drawer==="run"?J.jsxs("div",{className:"space-y-3 text-[11px]",children:[
            J.jsxs("label",{className:"block",children:[J.jsx("span",{className:"mb-1 block font-medium",children:"Integration"}),J.jsx("input",{className:inputClass+" w-full",readOnly:true,value:pick})]}),
            J.jsxs("label",{className:"block",children:[J.jsx("span",{className:"mb-1 block font-medium",children:"Integration Run Name"}),J.jsx("input",{className:inputClass+" w-full",defaultValue:pick+" "+new Date().toLocaleString()})]}),
            pick.indexOf("Import")===0?J.jsxs("label",{className:"block",children:[J.jsx("span",{className:"mb-1 block font-medium",children:"Source File"}),J.jsx("input",{className:inputClass+" w-full",type:"file"})]}):null,
            J.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[J.jsx("input",{className:inputClass,type:"date"}),J.jsx("input",{className:inputClass,type:"date"})]}),
            J.jsx("p",{className:"border border-line bg-canvas p-3 text-[10px] text-muted",children:"Parameters and files vary by selected integration."})
          ]}):
          drawer==="summary"?J.jsxs("div",{className:"space-y-3 text-[11px]",children:[
            ["Integration Run Name","Process Name","Integration Type","Start Date","End Date","Status","Records Processed","Errors"].map(function(x){return J.jsxs("div",{className:"grid grid-cols-[140px_1fr] border-b border-line pb-2",children:[J.jsx("span",{className:"text-muted",children:x}),J.jsx("b",{children:x==="Status"?"Completed with Errors":"Run detail"})]},x)}),
            J.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[J.jsx(Button,{children:"Source File"}),J.jsx(Button,{children:"Download Log"}),J.jsx("a",{href:"/maintenance/transaction-assistant",className:"flex h-8 items-center justify-center border border-teal bg-teal px-3 text-[11px] text-paper",children:"Go to Transaction Assistant"})]})
          ]}):
          drawer==="xref"?J.jsxs("div",{className:"space-y-2 text-[11px]",children:[
            J.jsx("p",{className:"text-muted",children:"View, download, edit, and upload Integration Hub cross-reference tables."}),
            ["COH Department Crosswalk","Payroll Pay Code Crosswalk","Location / Business Structure Map"].map(function(x){return J.jsxs("div",{className:"flex justify-between border-b border-line py-2",children:[J.jsx("span",{children:x}),J.jsx("button",{className:"text-teal",children:"Download"})]},x)})
          ]}):
          J.jsxs("div",{className:"space-y-2",children:[
            J.jsx(Button,{primary:true,onClick:function(){setDrawer("select")},children:"Run an Integration"}),
            J.jsx(Button,{children:"Run an Integration Set"}),
            J.jsx(Button,{onClick:function(){setView("scheduled");setDrawer(null)},children:"Schedule an Integration"}),
            J.jsx(Button,{onClick:function(){setView("scheduled");setDrawer(null)},children:"Schedule an Integration Set"})
          ]})
        }),
        drawer==="run"?J.jsxs("div",{className:"flex justify-end gap-2 border-t border-line px-4 py-3",children:[J.jsx(Button,{onClick:function(){setDrawer(null)},children:"Cancel"}),J.jsx(Button,{primary:true,onClick:function(){setDrawer(null)},children:"Run Integration"})]}):null
      ]})
    ]}):null
  ]});
}

function component(){
  if(typeof window!=="undefined"&&window.location.pathname==="/maintenance/integrations") return J.jsx(IntegrationsPage,{});
  return J.jsx(OriginalRoute,{});
}

export{component};
