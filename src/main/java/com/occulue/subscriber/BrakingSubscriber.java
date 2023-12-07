/*******************************************************************************
  Turnstone Biologics Confidential
  
  2018 Turnstone Biologics
  All Rights Reserved.
  
  This file is subject to the terms and conditions defined in
  file 'license.txt', which is part of this source code package.
   
  Contributors :
        Turnstone Biologics - General Release
 ******************************************************************************/
package com.occulue.subscriber;

import java.util.*;
import java.util.logging.Level;
import java.util.logging.Logger;

import org.axonframework.queryhandling.QueryGateway;
import org.axonframework.queryhandling.SubscriptionQueryResult;
import org.axonframework.messaging.responsetypes.ResponseTypes;

import org.springframework.context.ApplicationContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.stereotype.Component;


import com.occulue.api.*;
import com.occulue.entity.*;
import com.occulue.exception.*;

/**
 * Subscriber for Braking related events.  .
 * 
 * @author your_name_here
 *
 */
@Component("braking-subscriber")
public class BrakingSubscriber extends BaseSubscriber {

	public BrakingSubscriber() {
		queryGateway = applicationContext.getBean(QueryGateway.class);
	}
	
    public SubscriptionQueryResult<List<Braking>, Braking> brakingSubscribe() {
        return queryGateway
                .subscriptionQuery(new FindAllBrakingQuery(), 
                		ResponseTypes.multipleInstancesOf(Braking.class),
                		ResponseTypes.instanceOf(Braking.class));
    }

    public SubscriptionQueryResult<Braking, Braking> brakingSubscribe(@DestinationVariable UUID brakingId) {
        return queryGateway
                .subscriptionQuery(new FindBrakingQuery(new LoadBrakingFilter(brakingId)), 
                		ResponseTypes.instanceOf(Braking.class),
                		ResponseTypes.instanceOf(Braking.class));
    }




    // -------------------------------------------------
    // attributes
    // -------------------------------------------------
	@Autowired
    private final QueryGateway queryGateway;
}

