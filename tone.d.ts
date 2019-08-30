declare module 'tone'{
	export default ToneConstructor;
	
	export type Time = string | number;
	
	export type Frequency = string | number;

	export type Seconds = number;

	export type Hertz = number;

	export type Ticks = number;

	export type Decibels = number | string;
	
	export type Percent = number;

	export type Interval = number;
	
	type typeChecker = (arg: any) => boolean;

	export interface ToneConstructor extends ToneSubobjects{
		new () : Tone;
		Offline(callback:(transport: Transport) => void,duration: Time): Promise<Buffer>;
		connect(srcNode: AudioNode | ToneAudioNode, dstNode: AudioNode | ToneAudioNode | AudioParam | ToneAudioParam, outputNumber: number, inputNumber: number): ToneConstructor;
		disconnect(srcNode: AudioNode | ToneAudioNode, dstNode: AudioNode | ToneAudioNode | AudioParam | ToneAudioParam, outputNumber: number, inputNumber: number): ToneConstructor;
		connectSeries(...nodes: (AudioParam | Tone | AudioNode)[]): Tone;
		dbToGain(db: Decibels): number;
		gainToDB(gain: number): Decibels;
		defaultArg(given: any, fallback: any): any;
		defaults<V,C>(values: V[],keys: string[],constructor: C): C;
		equalPowerScale(percent: Percent): number;
		extend<C,P>(child: C, parent?:P): void;
		getContext(resolve:(context: Context) => void): Tone;
		immediate(): number;
		intervalToFrequencyRatio(interval: Interval): number;
		isArray: typeChecker;
		isBoolean: typeChecker;
		isDefined: typeChecker;
		isFunction: typeChecker;
		isNote: typeChecker;
		isNumber: typeChecker;
		isObject: typeChecker;
		isString: typeChecker;
		isUndef: typeChecker;
		loaded(): Promise<void>;
		noOp(): void;
		now(): number;
		setContext(ctx: AudioContext): void;
		start(): Promise<void>;
	}

	interface ToneSubobjects {
		
	}

	export interface Tone {
		context: Context;
		receive(channelName: string,channelNumber?: number): this;
		send(channelName: string, amount: number): GainNode;
		toFrequency(frequency: Frequency): Hertz;
		toSeconds(time: Time): Seconds;
		toTicks(time: Time): Ticks;
	}

	export interface ContextConstructor {
		new(): Context;
	}

	export interface Context extends Tone{}
	/** @see INCOMPLETE_DOCUMENTATION */
	export interface GainNode{} 

	export interface ToneAudioNodeConstructor {
		new(context?:AudioContext) : ToneAudioNode;
	}
	export interface ToneAudioNode extends Tone{
		channelCount: number;
		channelCountMode: string;
		channelInterpretation: string;
		context: Context;
		numberOfInputs: number;
		numberOfOutputs: number;


		chain(...nodes: (AudioParam | Tone | AudioNode | ToneAudioNode)[]): this;
		connect(unit: Tone | AudioParam | AudioNode | ToneAudioNode, outputNum?: number, inputNum?: number): this;
		disconnect(output: number | AudioNode | ToneAudioNode): this;
		dispose(): this;
		fan(...nodes: (AudioParam | Tone | AudioNode | ToneAudioNode)[]): this;
		toMaster(): this;
	}

	export interface ToneAudioParam extends AudioParam {}

	export interface BufferConstructor{
		new(url: AudioBuffer | string, onload?: Function, onerror?: Function): Buffer;
	}
	export interface Buffer extends Tone {
		duration: number;
		length: number ;
		loaded: boolean;
		numberOfChannels: number;
		reverse: boolean;
		dispose(): this;
		fromArray(array: Float32Array): this;
	}

	export interface EmitterConstructor{
		new(): Emitter;
	}
	export interface Emitter extends Tone{}

	export interface ToneContext{} 
	
	export interface Transport{}

}


