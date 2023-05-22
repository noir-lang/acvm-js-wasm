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



