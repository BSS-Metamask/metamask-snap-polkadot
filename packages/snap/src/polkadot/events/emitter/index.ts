import { EventEmitter } from "events";
import StrictEventEmitter from "strict-event-emitter-types";

export class StrictEmitterWithOriginProvider<T> {
  // maps emitters to origin
  private emitters: Record<string, StrictEventEmitter<EventEmitter, T>>;

  // returns or creates new emitter based on provided origin
  public getEventEmitter(origin: string): StrictEventEmitter<EventEmitter, T> {
    if (!this.emitters) {
      // @ts-expect-error Ignore for now
      this.emitters = {
        [origin]: new EventEmitter(),
      };
    } else if (!this.emitters[origin]) {
      // @ts-expect-error Ignore for now
      this.emitters[origin] = new EventEmitter();
    }
    return this.emitters[origin];
  }
}
