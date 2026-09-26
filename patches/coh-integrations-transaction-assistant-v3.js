import{c as reactFactory,r as jsxFactory,u as interop}from"/assets/useRouter-80ermfqe.js";
import{component as OriginalRoute}from"/assets/_-CP1N1Lhi.js?orig=1";

const React=interop(reactFactory(),1);
const J=jsxFactory();
const inputClass="h-8 rounded-sm border border-line bg-paper px-2 text-[11px] outline-none focus:border-teal";

const demoRuns=[
 {id:"run-payroll-20260925-1400",executionId:"boomi-exec-payroll-20260925-1400",name:"Export Payroll — Universal 09/25/2026 14:00",integrationName:"Export Payroll — Universal",processName:"COH WFM Payroll Export",type:"Export",startedAt:"09/25/2026 2:00 PM",user:"System",status:"Completed",records:4281,errors:0},
 {id:"run-people-20260925-1218",executionId:"boomi-exec-people-20260925-1218",name:"Import People Records — Universal 09/25/2026 12:18",integrationName:"Import People Records — Universal",processName:"COH Person Import",type:"Import",startedAt:"09/25/2026 12:18 PM",user:"Administrator",status:"Completed",records:16,errors:0},
 {id:"run-punch-20260925-1032",executionId:"boomi-exec-punch-20260925-1032",originalExecutionId:"boomi-exec-punch-20260925-1032",name:"Import Punches — Universal 09/25/2026 10:32",integrationName:"Import Punches — Universal",processName:"COH Punch Import",type:"Import",startedAt:"09/25/2026 10:32 AM",user:"Administrator",status:"Completed with Errors",records:87,errors:2,sourceFile:"COH_Punches_20260925_1032.csv"},
 {id:"run-sched-20260924-2300",executionId:"boomi-exec-sched-20260924-2300",name:"Export Schedules — Universal 09/24/2026 23:00",integrationName:"Export Schedules — Universal",processName:"COH Schedule Export",type:"Export",startedAt:"09/24/2026 11:00 PM",user:"System",status:"Completed",records:112,errors:0},
 {id:"run-accrual-20260924-1810",executionId:"boomi-exec-accrual-20260924-1810",originalExecutionId:"boomi-exec-accrual-20260924-1810",name:"Import Accruals — Universal 09/24/2026 18:10",integrationName:"Import Accruals — Universal",processName:"COH Accrual Import",type:"Import",startedAt:"09/24/2026 6:10 PM",user:"Administrator",status:"Failed",records:24,errors:4,sourceFile:"COH_Accruals_20260924.csv"}
];

const demoErrors={
 "run-punch-20260925-1032":[
  {errorNumber:100241,id:"COH-10007",description:"Badge number is missing. API tag: badgeNumber",errorDateTime:"09/25/2026 10:32:18 AM",apiTag:"badgeNumber",genericConnectorRecordId:"gcr-punch-100241",retryable:true,status:"ERROR"},
  {errorNumber:100242,id:"COH-10011",description:"Punch date/time is outside the employee employment period. API tag: punchDateTime",errorDateTime:"09/25/2026 10:32:19 AM",apiTag:"punchDateTime",genericConnectorRecordId:"gcr-punch-100242",retryable:true,status:"ERROR"}
 ],
 "run-accrual-20260924-1810":[
  {errorNumber:100301,id:"COH-10003",description:"Accrual profile reference was not found. API tag: accrualProfile",errorDateTime:"09/24/2026 6:10:09 PM",apiTag:"accrualProfile",genericConnectorRecordId:"gcr-accrual-100301",retryable:true,status:"ERROR"},
  {errorNumber:100302,id:"COH-10009",description:"Accrual amount must be a valid numeric value. API tag: amount",errorDateTime:"09/24/2026 6:10:10 PM",apiTag:"amount",genericConnectorRecordId:"gcr-accrual-100302",retryable:true,status:"ERROR"},
  {errorNumber:100303,id:"COH-10012",description:"Effective date is outside the configured accrual policy range. API tag: effectiveDate",errorDateTime:"09/24/2026 6:10:10 PM",apiTag:"effectiveDate",genericConnectorRecordId:"gcr-accrual-100303",retryable:true,status:"ERROR"},
  {errorNumber:100304,id:"COH-10015",description:"Person number could not be resolved. API tag: personNumber",errorDateTime:"09/24/2026 6:10:11 PM",apiTag:"personNumber",genericConnectorRecordId:"gcr-accrual-100304",retryable:true,status:"ERROR"}
 ]
};

async function getJson(url,options){
 try{const r=await fetch(url,options||{});if(!r.ok)return null;return await r.json()}catch(e){return null}
}

function Button(props){
 return J.jsx("button",{type:"button",disabled:props.disabled,onClick:props.onClick,className:"h-8 rounded-sm border px-3 text-[11px] font-medium disabled:cursor-not-allowed disabled:opacity-40 "+(props.primary?"border-teal bg-teal text-paper":"border-line bg-paper hover:bg-canvas"),children:props.children});
}
function Status(props){
 let cls="text-teal";if(props.value==="Completed")cls="text-ok";if(props.value==="Failed")cls="text-danger";if(props.value==="Completed with Errors")cls="text-warn";if(props.value==="In-Progress")cls="text-teal";
 return J.jsx("span",{className:"rounded-full border border-line px-2 py-0.5 text-[10px] "+cls,children:props.value});
}
function go(path){window.location.href=path}

function IntegrationsPage(){
 const sv=React.useState("past"),view=sv[0],setView=sv[1];
 const sq=React.useState(""),query=sq[0],setQuery=sq[1];
 const sd=React.useState(null),drawer=sd[0],setDrawer=sd[1];
 const sr=React.useState(null),selectedRun=sr[0],setSelectedRun=sr[1];
 const sRuns=React.useState(demoRuns),runs=sRuns[0],setRuns=sRuns[1];
 const sSource=React.useState("COH DEV"),source=sSource[0],setSource=sSource[1];
 React.useEffect(function(){let alive=true;(async function(){let p=await getJson("/api/integration-hub/runs?limit=200");if(alive&&p&&Array.isArray(p.runs)){setRuns(p.runs);setSource(p.source||"Boomi")}})();return function(){alive=false}},[]);
 const filtered=runs.filter(function(row){if(!query)return true;let q=query.toLowerCase();return String(row.name||"").toLowerCase().includes(q)||String(row.status||"").toLowerCase().includes(q)||String(row.processName||"").toLowerCase().includes(q)});
 function openSummary(row){setSelectedRun(row);setDrawer("summary")}
 return J.jsxs("div",{className:"relative flex h-full flex-col bg-paper",children:[
  J.jsxs("div",{className:"flex h-10 items-center gap-2 border-b border-line px-3 text-[11px]",children:[J.jsx("span",{className:"text-muted",children:"Maintenance"}),J.jsx("span",{children:">"}),J.jsx("b",{children:"Integrations"}),J.jsx("span",{className:"ml-auto text-[10px] text-muted",children:"Source: "+source})]}),
  J.jsxs("div",{className:"flex flex-wrap gap-2 border-b border-line bg-canvas px-3 py-2",children:[J.jsx(Button,{children:"Run Processes ▾"}),J.jsx(Button,{children:"Grid View"}),J.jsx(Button,{onClick:function(){let e=document.getElementById("integration-refine");if(e)e.focus()},children:"Refine"}),J.jsx(Button,{primary:true,children:"Run an Integration"}),J.jsx(Button,{children:"Reference Tables"}),J.jsx("span",{className:"flex-1"}),J.jsx(Button,{onClick:function(){window.location.reload()},children:"Refresh"})]}),
  J.jsxs("div",{className:"flex gap-2 border-b border-line px-3 py-2",children:[J.jsxs("select",{className:inputClass+" w-[235px]",value:view,onChange:function(e){setView(e.target.value)},children:[J.jsx("option",{value:"past",children:"Past Integration Runs"}),J.jsx("option",{value:"scheduled",children:"Scheduled Integration Requests"})]}),J.jsx("input",{id:"integration-refine",className:inputClass+" w-[300px]",placeholder:"Refine by name, process, status, or user",value:query,onChange:function(e){setQuery(e.target.value)}})]}),
  J.jsx("div",{className:"wfm-scroll flex-1 overflow-auto",children:view==="past"?J.jsxs("table",{className:"w-full min-w-[950px] text-[11px]",children:[
   J.jsx("thead",{className:"sticky top-0 bg-canvas",children:J.jsx("tr",{children:["Integration Run Name","Type","Started","User","Status","Records","Errors",""].map(function(h){return J.jsx("th",{className:"border-b border-line px-3 py-2 text-left",children:h},h)})})}),
   J.jsx("tbody",{children:filtered.map(function(row){return J.jsxs("tr",{className:"border-b border-line hover:bg-canvas",children:[
    J.jsx("td",{className:"px-3 py-2",children:J.jsx("button",{className:"font-medium text-teal hover:underline",onClick:function(){openSummary(row)},children:row.name})}),J.jsx("td",{className:"px-3 py-2",children:row.type}),J.jsx("td",{className:"px-3 py-2",children:row.startedAt}),J.jsx("td",{className:"px-3 py-2",children:row.user||"System"}),J.jsx("td",{className:"px-3 py-2",children:J.jsx(Status,{value:row.status})}),J.jsx("td",{className:"px-3 py-2",children:row.records||0}),J.jsx("td",{className:"px-3 py-2",children:row.errors>0?J.jsx("button",{className:"font-semibold text-danger hover:underline",onClick:function(){go("/maintenance/transaction-assistant?runId="+encodeURIComponent(row.id))},children:String(row.errors)}):"0"}),J.jsx("td",{className:"px-3 py-2 text-right",children:J.jsx("button",{className:"text-teal hover:underline",children:"Re-Run"})})
   ]},row.id)})})
  ]}):J.jsx("div",{className:"p-4 text-[11px] text-muted",children:"Scheduled integration requests will appear here from the Integration Hub scheduler."})}),
  drawer==="summary"&&selectedRun?J.jsxs("div",{className:"absolute inset-0 z-[90] flex justify-end bg-ink/25",children:[J.jsx("button",{className:"flex-1",onClick:function(){setDrawer(null)},"aria-label":"Close"}),J.jsxs("div",{className:"flex h-full w-full max-w-[470px] flex-col border-l border-line bg-paper shadow-xl",children:[J.jsxs("div",{className:"flex h-12 items-center border-b border-line px-4",children:[J.jsx("b",{className:"flex-1",children:"Run Summary"}),J.jsx("button",{onClick:function(){setDrawer(null)},children:"×"})]}),J.jsxs("div",{className:"wfm-scroll flex-1 overflow-auto p-4 text-[11px]",children:[
   [["Integration Run Name",selectedRun.name],["Process Name",selectedRun.processName],["Integration Type",selectedRun.type],["Start Date",selectedRun.startedAt],["Status",selectedRun.status],["Records Processed",String(selectedRun.records||0)],["Errors",String(selectedRun.errors||0)],["Boomi Execution ID",selectedRun.executionId||"—"]].map(function(x){return J.jsxs("div",{className:"grid grid-cols-[145px_1fr] border-b border-line py-2",children:[J.jsx("span",{className:"text-muted",children:x[0]}),J.jsx("b",{className:"break-all",children:x[1]})]},x[0])}),
   J.jsxs("div",{className:"mt-4 grid grid-cols-2 gap-2",children:[J.jsx(Button,{children:"Source File"}),J.jsx(Button,{children:"Download Log"}),selectedRun.type==="Import"&&selectedRun.errors>0?J.jsx(Button,{primary:true,onClick:function(){go("/maintenance/transaction-assistant?runId="+encodeURIComponent(selectedRun.id))},children:"Go to Transaction Assistant"}):null]})
  ]})]})]}):null
 ]});
}

function TransactionAssistantPage(){
 const params=new URLSearchParams(window.location.search),runId=params.get("runId")||"run-punch-20260925-1032";
 const demoRun=demoRuns.find(function(r){return r.id===runId})||demoRuns[2];
 const sRun=React.useState(demoRun),run=sRun[0],setRun=sRun[1];
 const sRows=React.useState((demoErrors[runId]||demoErrors[demoRun.id]||[]).slice()),rows=sRows[0],setRows=sRows[1];
 const sTotal=React.useState(rows.length),total=sTotal[0],setTotal=sTotal[1];
 const sSel=React.useState([]),selected=sSel[0],setSelected=sSel[1];
 const sQ=React.useState(""),query=sQ[0],setQuery=sQ[1];
 const sSource=React.useState("COH DEV"),source=sSource[0],setSource=sSource[1];
 const sMsg=React.useState(""),message=sMsg[0],setMessage=sMsg[1];
 React.useEffect(function(){let alive=true;(async function(){let p=await getJson("/api/integration-hub/transaction-assistant?runId="+encodeURIComponent(runId)+"&limit=200");if(alive&&p&&Array.isArray(p.errors)){setRows(p.errors);setTotal(typeof p.total==="number"?p.total:p.errors.length);if(p.run)setRun(p.run);setSource(p.source||"Boomi")}})();return function(){alive=false}},[runId]);
 const filtered=rows.filter(function(e){if(!query)return true;let q=query.toLowerCase();return String(e.errorNumber).includes(q)||String(e.description||"").toLowerCase().includes(q)||String(e.id||"").toLowerCase().includes(q)||String(e.apiTag||"").toLowerCase().includes(q)});
 function toggle(id){setSelected(function(prev){if(prev.includes(id))return prev.filter(function(x){return x!==id});if(prev.length>=200)return prev;return prev.concat([id])})}
 function selectMax(){setSelected(filtered.slice(0,200).map(function(e){return e.genericConnectorRecordId||String(e.errorNumber)}))}
 async function resubmit(){if(!selected.length)return;let chosen=rows.filter(function(e){return selected.includes(e.genericConnectorRecordId||String(e.errorNumber))});let body={runId:run.id,executionId:run.executionId,originalExecutionId:run.originalExecutionId||run.executionId,genericConnectorRecordIds:chosen.map(function(e){return e.genericConnectorRecordId}).filter(Boolean),continueOnFailure:true};let r=await getJson("/api/integration-hub/transaction-assistant/resubmit",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(body)});if(r){setMessage("Resubmission accepted"+(r.requestId?" · Request "+r.requestId:""));setSource(r.source||"Boomi")}else{setMessage("COH DEV: selected transactions marked for resubmission. When the Boomi adapter is connected this action will call RerunDocument.")}setSelected([])}
 function removeSelected(){if(!selected.length)return;setRows(function(prev){return prev.filter(function(e){return !selected.includes(e.genericConnectorRecordId||String(e.errorNumber))})});setSelected([]);setMessage("Selected Transaction Assistant records removed from the current view.")}
 function exportCsv(){let cols=["Error Number","Description","Error Date/Time","ID","API Tag","Generic Connector Record ID","Retryable"];let lines=[cols.join(",")].concat(rows.map(function(e){return [e.errorNumber,e.description,e.errorDateTime,e.id,e.apiTag,e.genericConnectorRecordId,e.retryable].map(function(v){return '"'+String(v==null?"":v).replace(/"/g,'""')+'"'}).join(",")}));let blob=new Blob([lines.join("\n")],{type:"text/csv"});let a=document.createElement("a");a.href=URL.createObjectURL(blob);a.download="transaction-assistant-"+run.id+".csv";a.click();URL.revokeObjectURL(a.href)}
 return J.jsxs("div",{className:"flex h-full flex-col bg-paper",children:[
  J.jsxs("div",{className:"flex h-10 items-center gap-2 border-b border-line px-3 text-[11px]",children:[J.jsx("button",{className:"text-teal hover:underline",onClick:function(){go("/maintenance/integrations")},children:"Integrations"}),J.jsx("span",{children:">"}),J.jsx("b",{children:"Transaction Assistant"}),J.jsx("span",{className:"ml-auto text-[10px] text-muted",children:"Source: "+source})]}),
  J.jsxs("div",{className:"border-b border-line bg-canvas px-3 py-3",children:[J.jsx("div",{className:"text-[12px] font-semibold",children:run.name||run.integrationName}),J.jsxs("div",{className:"mt-1 flex flex-wrap gap-x-5 gap-y-1 text-[10px] text-muted",children:[J.jsx("span",{children:"Process: "+(run.processName||"—")}),J.jsx("span",{children:"Execution: "+(run.executionId||"—")}),J.jsx("span",{children:"Status: "+(run.status||"—")})]})]}),
  J.jsxs("div",{className:"flex flex-wrap items-center gap-2 border-b border-line px-3 py-2",children:[J.jsx(Button,{onClick:selectMax,children:"Select Max"}),J.jsx(Button,{primary:true,disabled:selected.length===0,onClick:resubmit,children:"Resubmit"}),J.jsx(Button,{disabled:selected.length===0,onClick:removeSelected,children:"Delete"}),J.jsx(Button,{onClick:exportCsv,children:"Share / Export All Records"}),J.jsx("span",{className:"flex-1"}),J.jsx("input",{className:inputClass+" w-[300px]",placeholder:"Refine errors",value:query,onChange:function(e){setQuery(e.target.value)}})]}),
  J.jsxs("div",{className:"flex gap-6 border-b border-line px-3 py-2 text-[11px]",children:[J.jsxs("span",{children:[J.jsx("b",{children:String(total)})," Total"]}),J.jsxs("span",{children:[J.jsx("b",{children:String(selected.length)})," Selected"]}),J.jsxs("span",{children:[J.jsx("b",{children:String(filtered.length)})," Displayed"]}),J.jsx("span",{className:"text-muted",children:"Select up to 200 records · Transaction Assistant supports up to 50,000 loaded records"})]}),
  message?J.jsx("div",{className:"border-b border-line bg-canvas px-3 py-2 text-[10px] text-muted",children:message}):null,
  J.jsx("div",{className:"wfm-scroll flex-1 overflow-auto",children:J.jsxs("table",{className:"w-full min-w-[900px] text-[11px]",children:[
   J.jsx("thead",{className:"sticky top-0 bg-canvas",children:J.jsx("tr",{children:["","Error Number","Description","Error Date/Time","ID","Retryable"].map(function(h){return J.jsx("th",{className:"border-b border-line px-3 py-2 text-left",children:h},h||"select")})}),
   J.jsx("tbody",{children:filtered.map(function(e){let key=e.genericConnectorRecordId||String(e.errorNumber),checked=selected.includes(key);return J.jsxs("tr",{className:"border-b border-line hover:bg-canvas",children:[J.jsx("td",{className:"px-3 py-2",children:J.jsx("input",{type:"checkbox",checked:checked,onChange:function(){toggle(key)}})}),J.jsx("td",{className:"px-3 py-2 font-medium",children:String(e.errorNumber)}),J.jsx("td",{className:"max-w-[520px] px-3 py-2",title:e.description,children:e.description}),J.jsx("td",{className:"whitespace-nowrap px-3 py-2",children:e.errorDateTime}),J.jsx("td",{className:"px-3 py-2",children:e.id}),J.jsx("td",{className:"px-3 py-2",children:e.retryable?"Yes":"No"})]},key)})})
  ]})})
 ]});
}

function component(){
 if(typeof window!=="undefined"){
  if(window.location.pathname==="/maintenance/integrations")return J.jsx(IntegrationsPage,{});
  if(window.location.pathname==="/maintenance/transaction-assistant")return J.jsx(TransactionAssistantPage,{});
 }
 return J.jsx(OriginalRoute,{});
}
export{component};
