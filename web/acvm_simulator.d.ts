/* tslint:disable */
/* eslint-disable */
/**
* @param {any} abi
* @param {any} inputs
* @param {any} return_value
* @returns {WitnessMap}
*/
export function abiEncode(abi: any, inputs: any, return_value: any): WitnessMap;
/**
* @param {any} abi
* @param {WitnessMap} witness_map
* @returns {any}
*/
export function abiDecode(abi: any, witness_map: WitnessMap): any;
/**
* @param {Uint8Array} circuit
* @param {WitnessMap} initial_witness
* @param {Function} oracle_resolver
* @returns {Promise<WitnessMap>}
*/
export function executeCircuit(circuit: Uint8Array, initial_witness: WitnessMap, oracle_resolver: Function): Promise<WitnessMap>;
/**
* @param {string} level
*/
export function init_log_level(level: string): void;
/**
* @returns {any}
*/
export function build_info(): any;

// Map from witness index to hex string value of witness.
export type WitnessMap = Map<number, string>;




export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly abiEncode: (a: number, b: number, c: number, d: number) => void;
  readonly abiDecode: (a: number, b: number, c: number) => void;
  readonly executeCircuit: (a: number, b: number, c: number, d: number) => number;
  readonly init_log_level: (a: number, b: number) => void;
  readonly build_info: () => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3754af057aa59289: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h86e4e0c930314a36: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h3a238237c2839e9f: (a: number, b: number, c: number, d: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
