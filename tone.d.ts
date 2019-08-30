declare module 'tone'{
	export default ToneNamespace;
	
	export type Time = string | number;
	
	export type Frequency = string | number;

	export interface ToneNamespace extends Partial<any>{}

	export interface ToneConstructor{
		new () : Tone;
		Offline: (callback:Function,duration: Time)
	}

	export interface Tone {
		context: Context;
		receive(channelName: string,channelNumber?: number): this;
		send(channelName: string, amount: number): GainNode;
		toFrequency(frequency: Frequency): number;
	}
	
	export interface Context extends Tone {}
	/** @see INCOMPLETE_DOCUMENTATION */
	export interface GainNode{} 
	export interface ToneAudioNode extends AudioNode {

	}

	export interface BufferConstructor{
		new(url: AudioBuffer | string, onload?: Function, onerror?: Function): Buffer;
	}
	export interface Buffer extends Tone {
		duration: number;
		length: number ;
	}
	export interface ToneContext{} 
	

}


