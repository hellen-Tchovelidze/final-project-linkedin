# -*- coding: utf-8 -*-

# Copyright 2020 Google LLC
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/api/backend.proto
"""Generated protocol buffer code."""
from cloudsdk.google.protobuf import descriptor as _descriptor
from cloudsdk.google.protobuf import message as _message
from cloudsdk.google.protobuf import reflection as _reflection
from cloudsdk.google.protobuf import symbol_database as _symbol_database

# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()


DESCRIPTOR = _descriptor.FileDescriptor(
    name="google/api/backend.proto",
    package="google.api",
    syntax="proto3",
    serialized_options=b"\n\016com.google.apiB\014BackendProtoP\001ZEgoogle.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig\242\002\004GAPI",
    create_key=_descriptor._internal_create_key,
    serialized_pb=b'\n\x18google/api/backend.proto\x12\ngoogle.api"1\n\x07\x42\x61\x63kend\x12&\n\x05rules\x18\x01 \x03(\x0b\x32\x17.google.api.BackendRule"X\n\x0b\x42\x61\x63kendRule\x12\x10\n\x08selector\x18\x01 \x01(\t\x12\x0f\n\x07\x61\x64\x64ress\x18\x02 \x01(\t\x12\x10\n\x08\x64\x65\x61\x64line\x18\x03 \x01(\x01\x12\x14\n\x0cmin_deadline\x18\x04 \x01(\x01\x42n\n\x0e\x63om.google.apiB\x0c\x42\x61\x63kendProtoP\x01ZEgoogle.golang.org/genproto/googleapis/api/serviceconfig;serviceconfig\xa2\x02\x04GAPIb\x06proto3',
)


_BACKEND = _descriptor.Descriptor(
    name="Backend",
    full_name="google.api.Backend",
    filename=None,
    file=DESCRIPTOR,
    containing_type=None,
    create_key=_descriptor._internal_create_key,
    fields=[
        _descriptor.FieldDescriptor(
            name="rules",
            full_name="google.api.Backend.rules",
            index=0,
            number=1,
            type=11,
            cpp_type=10,
            label=3,
            has_default_value=False,
            default_value=[],
            message_type=None,
            enum_type=None,
            containing_type=None,
            is_extension=False,
            extension_scope=None,
            serialized_options=None,
            file=DESCRIPTOR,
            create_key=_descriptor._internal_create_key,
        )
    ],
    extensions=[],
    nested_types=[],
    enum_types=[],
    serialized_options=None,
    is_extendable=False,
    syntax="proto3",
    extension_ranges=[],
    oneofs=[],
    serialized_start=40,
    serialized_end=89,
)


_BACKENDRULE = _descriptor.Descriptor(
    name="BackendRule",
    full_name="google.api.BackendRule",
    filename=None,
    file=DESCRIPTOR,
    containing_type=None,
    create_key=_descriptor._internal_create_key,
    fields=[
        _descriptor.FieldDescriptor(
            name="selector",
            full_name="google.api.BackendRule.selector",
            index=0,
            number=1,
            type=9,
            cpp_type=9,
            label=1,
            has_default_value=False,
            default_value=b"".decode("utf-8"),
            message_type=None,
            enum_type=None,
            containing_type=None,
            is_extension=False,
            extension_scope=None,
            serialized_options=None,
            file=DESCRIPTOR,
            create_key=_descriptor._internal_create_key,
        ),
        _descriptor.FieldDescriptor(
            name="address",
            full_name="google.api.BackendRule.address",
            index=1,
            number=2,
            type=9,
            cpp_type=9,
            label=1,
            has_default_value=False,
            default_value=b"".decode("utf-8"),
            message_type=None,
            enum_type=None,
            containing_type=None,
            is_extension=False,
            extension_scope=None,
            serialized_options=None,
            file=DESCRIPTOR,
            create_key=_descriptor._internal_create_key,
        ),
        _descriptor.FieldDescriptor(
            name="deadline",
            full_name="google.api.BackendRule.deadline",
            index=2,
            number=3,
            type=1,
            cpp_type=5,
            label=1,
            has_default_value=False,
            default_value=float(0),
            message_type=None,
            enum_type=None,
            containing_type=None,
            is_extension=False,
            extension_scope=None,
            serialized_options=None,
            file=DESCRIPTOR,
            create_key=_descriptor._internal_create_key,
        ),
        _descriptor.FieldDescriptor(
            name="min_deadline",
            full_name="google.api.BackendRule.min_deadline",
            index=3,
            number=4,
            type=1,
            cpp_type=5,
            label=1,
            has_default_value=False,
            default_value=float(0),
            message_type=None,
            enum_type=None,
            containing_type=None,
            is_extension=False,
            extension_scope=None,
            serialized_options=None,
            file=DESCRIPTOR,
            create_key=_descriptor._internal_create_key,
        ),
    ],
    extensions=[],
    nested_types=[],
    enum_types=[],
    serialized_options=None,
    is_extendable=False,
    syntax="proto3",
    extension_ranges=[],
    oneofs=[],
    serialized_start=91,
    serialized_end=179,
)

_BACKEND.fields_by_name["rules"].message_type = _BACKENDRULE
DESCRIPTOR.message_types_by_name["Backend"] = _BACKEND
DESCRIPTOR.message_types_by_name["BackendRule"] = _BACKENDRULE
_sym_db.RegisterFileDescriptor(DESCRIPTOR)

Backend = _reflection.GeneratedProtocolMessageType(
    "Backend",
    (_message.Message,),
    {
        "DESCRIPTOR": _BACKEND,
        "__module__": "google.api.backend_pb2"
        # @@protoc_insertion_point(class_scope:google.api.Backend)
    },
)
_sym_db.RegisterMessage(Backend)

BackendRule = _reflection.GeneratedProtocolMessageType(
    "BackendRule",
    (_message.Message,),
    {
        "DESCRIPTOR": _BACKENDRULE,
        "__module__": "google.api.backend_pb2"
        # @@protoc_insertion_point(class_scope:google.api.BackendRule)
    },
)
_sym_db.RegisterMessage(BackendRule)


DESCRIPTOR._options = None
# @@protoc_insertion_point(module_scope)
