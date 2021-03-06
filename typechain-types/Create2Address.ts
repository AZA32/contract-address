/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface Create2AddressInterface extends utils.Interface {
  functions: {
    "computeAddress(uint256)": FunctionFragment;
    "create(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "computeAddress" | "create"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "computeAddress",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "create",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "computeAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;

  events: {
    "created(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "created"): EventFragment;
}

export interface createdEventObject {
  contractAddr: string;
}
export type createdEvent = TypedEvent<[string], createdEventObject>;

export type createdEventFilter = TypedEventFilter<createdEvent>;

export interface Create2Address extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Create2AddressInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    computeAddress(
      _salt: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    create(
      _salt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  computeAddress(
    _salt: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<string>;

  create(
    _salt: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    computeAddress(
      _salt: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<string>;

    create(
      _salt: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "created(address)"(contractAddr?: null): createdEventFilter;
    created(contractAddr?: null): createdEventFilter;
  };

  estimateGas: {
    computeAddress(
      _salt: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    create(
      _salt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    computeAddress(
      _salt: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    create(
      _salt: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
