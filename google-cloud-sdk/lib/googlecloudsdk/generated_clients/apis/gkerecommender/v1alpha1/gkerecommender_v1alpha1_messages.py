"""Generated message classes for gkerecommender version v1alpha1.

GKE Recommender API
"""
# NOTE: This file is autogenerated and should not be edited by hand.

from __future__ import absolute_import

from apitools.base.protorpclite import messages as _messages
from apitools.base.py import encoding


package = 'gkerecommender'


class AcceleratorOption(_messages.Message):
  r"""A AcceleratorOption object.

  Fields:
    acceleratorType: A string attribute.
    machineType: A string attribute.
    modelAndModelServerInfo: A ModelAndModelServerInfo attribute.
    performanceStats: A PerformanceStats attribute.
    resourcesUsed: A ResourcesUsed attribute.
    tpuTopology: A string attribute.
  """

  acceleratorType = _messages.StringField(1)
  machineType = _messages.StringField(2)
  modelAndModelServerInfo = _messages.MessageField('ModelAndModelServerInfo', 3)
  performanceStats = _messages.MessageField('PerformanceStats', 4)
  resourcesUsed = _messages.MessageField('ResourcesUsed', 5)
  tpuTopology = _messages.StringField(6)


class GenerateOptimizedManifestResponse(_messages.Message):
  r"""A GenerateOptimizedManifestResponse object.

  Fields:
    comments: Includes command bundle
    k8sManifests: A K8SManifest attribute.
  """

  comments = _messages.StringField(1, repeated=True)
  k8sManifests = _messages.MessageField('K8SManifest', 2, repeated=True)


class GkerecommenderAcceleratorsListRequest(_messages.Message):
  r"""A GkerecommenderAcceleratorsListRequest object.

  Fields:
    modelName: A string attribute.
    modelServerName: A string attribute.
    modelServerVersion: A string attribute.
    performanceRequirements_maxNtpotMilliseconds: The max normalized time per
      output token.
  """

  modelName = _messages.StringField(1)
  modelServerName = _messages.StringField(2, default='ANY')
  modelServerVersion = _messages.StringField(3, default='LATEST')
  performanceRequirements_maxNtpotMilliseconds = _messages.IntegerField(4, variant=_messages.Variant.INT32, default=999999)


class GkerecommenderModelServersListRequest(_messages.Message):
  r"""A GkerecommenderModelServersListRequest object.

  Fields:
    modelName: A string attribute.
  """

  modelName = _messages.StringField(1)


class GkerecommenderModelServersVersionsListRequest(_messages.Message):
  r"""A GkerecommenderModelServersVersionsListRequest object.

  Fields:
    modelName: A string attribute.
    modelServerName: A string attribute.
  """

  modelName = _messages.StringField(1)
  modelServerName = _messages.StringField(2, required=True)


class GkerecommenderModelsAndServersListRequest(_messages.Message):
  r"""A GkerecommenderModelsAndServersListRequest object.

  Fields:
    modelName: A string attribute.
    modelServerName: A string attribute.
    modelServerVersion: A string attribute.
  """

  modelName = _messages.StringField(1, default='ANY')
  modelServerName = _messages.StringField(2, default='ANY')
  modelServerVersion = _messages.StringField(3, default='ANY')


class GkerecommenderModelsListRequest(_messages.Message):
  r"""A GkerecommenderModelsListRequest object."""


class GkerecommenderOptimizedManifestRequest(_messages.Message):
  r"""A GkerecommenderOptimizedManifestRequest object.

  Fields:
    acceleratorType: A string attribute.
    kubernetesNamespace: The namespace in which the manifests will be
      deployed.
    modelAndModelServerInfo_modelName: A string attribute.
    modelAndModelServerInfo_modelServerName: A string attribute.
    modelAndModelServerInfo_modelServerVersion: A string attribute.
    targetNtpotMilliseconds: The target number of normalized time per output
      token.
  """

  acceleratorType = _messages.StringField(1)
  kubernetesNamespace = _messages.StringField(2, default='default')
  modelAndModelServerInfo_modelName = _messages.StringField(3)
  modelAndModelServerInfo_modelServerName = _messages.StringField(4)
  modelAndModelServerInfo_modelServerVersion = _messages.StringField(5, default='LATEST')
  targetNtpotMilliseconds = _messages.IntegerField(6, variant=_messages.Variant.INT32)


class K8SManifest(_messages.Message):
  r"""A K8SManifest object.

  Fields:
    apiVersion: Kubernetes API version
    content: YAML content
    kind: Kubernetes resource kind
  """

  apiVersion = _messages.StringField(1)
  content = _messages.StringField(2)
  kind = _messages.StringField(3)


class ListCompatibleAcceleratorProfilesResponse(_messages.Message):
  r"""A ListCompatibleAcceleratorProfilesResponse object.

  Fields:
    acceleratorOptions: A AcceleratorOption attribute.
    maxNtpotMilliseconds: A integer attribute.
    maxThroughputTokensPerSecond: A integer attribute.
    minNtpotMilliseconds: The minimum and maximum normalized time per output
      token.
    minThroughputTokensPerSecond: A integer attribute.
  """

  acceleratorOptions = _messages.MessageField('AcceleratorOption', 1, repeated=True)
  maxNtpotMilliseconds = _messages.IntegerField(2, variant=_messages.Variant.INT32)
  maxThroughputTokensPerSecond = _messages.IntegerField(3, variant=_messages.Variant.INT32)
  minNtpotMilliseconds = _messages.IntegerField(4, variant=_messages.Variant.INT32)
  minThroughputTokensPerSecond = _messages.IntegerField(5, variant=_messages.Variant.INT32)


class ListModelAndServerCombinationsResponse(_messages.Message):
  r"""A ListModelAndServerCombinationsResponse object.

  Fields:
    modelAndModelServerInfo: A ModelAndModelServerInfo attribute.
  """

  modelAndModelServerInfo = _messages.MessageField('ModelAndModelServerInfo', 1, repeated=True)


class ListModelServerVersionsResponse(_messages.Message):
  r"""A ListModelServerVersionsResponse object.

  Fields:
    modelServerVersions: A string attribute.
  """

  modelServerVersions = _messages.StringField(1, repeated=True)


class ListModelServersResponse(_messages.Message):
  r"""A ListModelServersResponse object.

  Fields:
    modelServerNames: A string attribute.
  """

  modelServerNames = _messages.StringField(1, repeated=True)


class ListModelsResponse(_messages.Message):
  r"""A ListModelsResponse object.

  Fields:
    modelNames: A string attribute.
  """

  modelNames = _messages.StringField(1, repeated=True)


class ModelAndModelServerInfo(_messages.Message):
  r"""A ModelAndModelServerInfo object.

  Fields:
    modelName: A string attribute.
    modelServerName: A string attribute.
    modelServerVersion: A string attribute.
  """

  modelName = _messages.StringField(1)
  modelServerName = _messages.StringField(2)
  modelServerVersion = _messages.StringField(3)


class PerformanceStats(_messages.Message):
  r"""A PerformanceStats object.

  Fields:
    ntpotMilliseconds: normalized time per output token.
    outputTokensPerSecond: A integer attribute.
    queriesPerSecond: A integer attribute.
  """

  ntpotMilliseconds = _messages.IntegerField(1, variant=_messages.Variant.INT32)
  outputTokensPerSecond = _messages.IntegerField(2, variant=_messages.Variant.INT32)
  queriesPerSecond = _messages.IntegerField(3, variant=_messages.Variant.INT32)


class ResourcesUsed(_messages.Message):
  r"""A ResourcesUsed object.

  Fields:
    acceleratorCount: A integer attribute.
    cpu: A string attribute.
    ephemeralStorage: A string attribute.
    memory: A string attribute.
  """

  acceleratorCount = _messages.IntegerField(1, variant=_messages.Variant.INT32)
  cpu = _messages.StringField(2)
  ephemeralStorage = _messages.StringField(3)
  memory = _messages.StringField(4)


class StandardQueryParameters(_messages.Message):
  r"""Query parameters accepted by all methods.

  Enums:
    FXgafvValueValuesEnum: V1 error format.
    AltValueValuesEnum: Data format for response.

  Fields:
    f__xgafv: V1 error format.
    access_token: OAuth access token.
    alt: Data format for response.
    callback: JSONP
    fields: Selector specifying which fields to include in a partial response.
    key: API key. Your API key identifies your project and provides you with
      API access, quota, and reports. Required unless you provide an OAuth 2.0
      token.
    oauth_token: OAuth 2.0 token for the current user.
    prettyPrint: Returns response with indentations and line breaks.
    quotaUser: Available to use for quota purposes for server-side
      applications. Can be any arbitrary string assigned to a user, but should
      not exceed 40 characters.
    trace: A tracing token of the form "token:<tokenid>" to include in api
      requests.
    uploadType: Legacy upload protocol for media (e.g. "media", "multipart").
    upload_protocol: Upload protocol for media (e.g. "raw", "multipart").
  """

  class AltValueValuesEnum(_messages.Enum):
    r"""Data format for response.

    Values:
      json: Responses with Content-Type of application/json
      media: Media download with context-dependent Content-Type
      proto: Responses with Content-Type of application/x-protobuf
    """
    json = 0
    media = 1
    proto = 2

  class FXgafvValueValuesEnum(_messages.Enum):
    r"""V1 error format.

    Values:
      _1: v1 error format
      _2: v2 error format
    """
    _1 = 0
    _2 = 1

  f__xgafv = _messages.EnumField('FXgafvValueValuesEnum', 1)
  access_token = _messages.StringField(2)
  alt = _messages.EnumField('AltValueValuesEnum', 3, default='json')
  callback = _messages.StringField(4)
  fields = _messages.StringField(5)
  key = _messages.StringField(6)
  oauth_token = _messages.StringField(7)
  prettyPrint = _messages.BooleanField(8, default=True)
  quotaUser = _messages.StringField(9)
  trace = _messages.StringField(10)
  uploadType = _messages.StringField(11)
  upload_protocol = _messages.StringField(12)


encoding.AddCustomJsonFieldMapping(
    StandardQueryParameters, 'f__xgafv', '$.xgafv')
encoding.AddCustomJsonEnumMapping(
    StandardQueryParameters.FXgafvValueValuesEnum, '_1', '1')
encoding.AddCustomJsonEnumMapping(
    StandardQueryParameters.FXgafvValueValuesEnum, '_2', '2')
encoding.AddCustomJsonFieldMapping(
    GkerecommenderAcceleratorsListRequest, 'performanceRequirements_maxNtpotMilliseconds', 'performanceRequirements.maxNtpotMilliseconds')
encoding.AddCustomJsonFieldMapping(
    GkerecommenderOptimizedManifestRequest, 'modelAndModelServerInfo_modelName', 'modelAndModelServerInfo.modelName')
encoding.AddCustomJsonFieldMapping(
    GkerecommenderOptimizedManifestRequest, 'modelAndModelServerInfo_modelServerName', 'modelAndModelServerInfo.modelServerName')
encoding.AddCustomJsonFieldMapping(
    GkerecommenderOptimizedManifestRequest, 'modelAndModelServerInfo_modelServerVersion', 'modelAndModelServerInfo.modelServerVersion')
