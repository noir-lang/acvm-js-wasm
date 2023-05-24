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
* @param {string} level
*/
export function init_log_level(level: string): void;
/**
* @returns {any}
*/
export function buildInfo(): any;
/**
* Executes an ACIR circuit to generate the solved witness from the initial witness.
*
* @param {Uint8Array} circuit - A serialized representation of an ACIR circuit
* @param {WitnessMap} initial_witness - The initial witness map defining all of the inputs to `circuit`..
* @param {OracleCallback} oracle_callback - A callback to process oracle calls from the circuit.
* @returns {WitnessMap} The solved witness calculated by executing the circuit on the provided inputs.
*/
export function executeCircuit(circuit: Uint8Array, initial_witness: WitnessMap, oracle_callback: OracleCallback): Promise<WitnessMap>;

// Map from witness index to hex string value of witness.
export type WitnessMap = Map<number, string>;



/**
 * A callback which performs an oracle call and returns the response as an array of outputs.
 * @callback OracleCallback
 * @param {string} name - The identifier for the type of oracle call being performed.
 * @param {string[]} inputs - An array of hex encoded inputs to the oracle call.
 * @returns {Promise<string[]>} outputs - An array of hex encoded outputs containing the results of the oracle call.
 */
export type OracleCallback = (name: string, inputs: string[]) => Promise<string[]>;



export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly abiEncode: (a: number, b: number, c: number, d: number) => void;
  readonly abiDecode: (a: number, b: number, c: number) => void;
  readonly init_log_level: (a: number, b: number) => void;
  readonly buildInfo: () => number;
  readonly executeCircuit: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h3754af057aa59289: (a: number, b: number, c: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
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
