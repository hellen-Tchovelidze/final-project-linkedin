# -*- coding: utf-8 -*- #
# Copyright 2025 Google LLC. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""Bigtable logical views delete command."""

import textwrap

from apitools.base.py import exceptions
from googlecloudsdk.api_lib.bigtable import logical_views
from googlecloudsdk.api_lib.bigtable import util
from googlecloudsdk.calliope import base
from googlecloudsdk.command_lib.bigtable import arguments
from googlecloudsdk.core import log
from googlecloudsdk.core.console import console_io

HttpError = exceptions.HttpError


@base.UniverseCompatible
@base.ReleaseTracks(
    base.ReleaseTrack.GA, base.ReleaseTrack.BETA, base.ReleaseTrack.ALPHA
)
class DeleteLogicalView(base.DeleteCommand):
  """Delete a Bigtable logical view."""

  detailed_help = {
      'EXAMPLES': textwrap.dedent("""\
          To delete a logical view, run:

            $ {command} my-logical-view-id --instance=my-instance-id

          """),
  }

  @staticmethod
  def Args(parser):
    arguments.AddLogicalViewResourceArg(parser, 'to delete')

  def Run(self, args):
    """This is what gets called when the user runs this command.

    Args:
      args: an argparse namespace. All the arguments that were provided to this
        command invocation.

    Returns:
      Some value that we want to have printed later.
    """
    logical_view_ref = args.CONCEPTS.logical_view.Parse()
    console_io.PromptContinue(
        f'You are about to delete logical view: [{logical_view_ref.Name()}]',
        throw_if_unattended=True,
        cancel_on_no=True,
    )
    try:
      response = logical_views.Delete(logical_view_ref)
    except HttpError as e:
      util.FormatErrorMessages(e)
    else:
      log.DeletedResource(logical_view_ref.Name(), 'logical view')
      return response
