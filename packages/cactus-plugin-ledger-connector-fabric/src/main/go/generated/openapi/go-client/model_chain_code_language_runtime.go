/*
Hyperledger Cactus Plugin - Connector Fabric

Can perform basic tasks on a fabric ledger

API version: 2.1.0
*/

// Code generated by OpenAPI Generator (https://openapi-generator.tech); DO NOT EDIT.

package cactus-plugin-ledger-connector-fabric

import (
	"encoding/json"
	"fmt"
)

// ChainCodeLanguageRuntime Enumerates the supported programming language runtimes of Hyperledger Fabric
type ChainCodeLanguageRuntime string

// List of ChainCodeLanguageRuntime
const (
	GOLANG ChainCodeLanguageRuntime = "golang"
	NODE ChainCodeLanguageRuntime = "node"
	JAVA ChainCodeLanguageRuntime = "java"
)

// All allowed values of ChainCodeLanguageRuntime enum
var AllowedChainCodeLanguageRuntimeEnumValues = []ChainCodeLanguageRuntime{
	"golang",
	"node",
	"java",
}

func (v *ChainCodeLanguageRuntime) UnmarshalJSON(src []byte) error {
	var value string
	err := json.Unmarshal(src, &value)
	if err != nil {
		return err
	}
	enumTypeValue := ChainCodeLanguageRuntime(value)
	for _, existing := range AllowedChainCodeLanguageRuntimeEnumValues {
		if existing == enumTypeValue {
			*v = enumTypeValue
			return nil
		}
	}

	return fmt.Errorf("%+v is not a valid ChainCodeLanguageRuntime", value)
}

// NewChainCodeLanguageRuntimeFromValue returns a pointer to a valid ChainCodeLanguageRuntime
// for the value passed as argument, or an error if the value passed is not allowed by the enum
func NewChainCodeLanguageRuntimeFromValue(v string) (*ChainCodeLanguageRuntime, error) {
	ev := ChainCodeLanguageRuntime(v)
	if ev.IsValid() {
		return &ev, nil
	} else {
		return nil, fmt.Errorf("invalid value '%v' for ChainCodeLanguageRuntime: valid values are %v", v, AllowedChainCodeLanguageRuntimeEnumValues)
	}
}

// IsValid return true if the value is valid for the enum, false otherwise
func (v ChainCodeLanguageRuntime) IsValid() bool {
	for _, existing := range AllowedChainCodeLanguageRuntimeEnumValues {
		if existing == v {
			return true
		}
	}
	return false
}

// Ptr returns reference to ChainCodeLanguageRuntime value
func (v ChainCodeLanguageRuntime) Ptr() *ChainCodeLanguageRuntime {
	return &v
}

type NullableChainCodeLanguageRuntime struct {
	value *ChainCodeLanguageRuntime
	isSet bool
}

func (v NullableChainCodeLanguageRuntime) Get() *ChainCodeLanguageRuntime {
	return v.value
}

func (v *NullableChainCodeLanguageRuntime) Set(val *ChainCodeLanguageRuntime) {
	v.value = val
	v.isSet = true
}

func (v NullableChainCodeLanguageRuntime) IsSet() bool {
	return v.isSet
}

func (v *NullableChainCodeLanguageRuntime) Unset() {
	v.value = nil
	v.isSet = false
}

func NewNullableChainCodeLanguageRuntime(val *ChainCodeLanguageRuntime) *NullableChainCodeLanguageRuntime {
	return &NullableChainCodeLanguageRuntime{value: val, isSet: true}
}

func (v NullableChainCodeLanguageRuntime) MarshalJSON() ([]byte, error) {
	return json.Marshal(v.value)
}

func (v *NullableChainCodeLanguageRuntime) UnmarshalJSON(src []byte) error {
	v.isSet = true
	return json.Unmarshal(src, &v.value)
}

