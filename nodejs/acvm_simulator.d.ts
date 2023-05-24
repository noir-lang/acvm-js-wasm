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


