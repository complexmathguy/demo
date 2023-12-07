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
 * Subscriber for Chassis related events.  .
 * 
 * @author your_name_here
 *
 */
@Component("chassis-subscriber")
public class ChassisSubscriber extends BaseSubscriber {

	public ChassisSubscriber() {
		queryGateway = applicationContext.getBean(QueryGateway.class);
	}
	
    public SubscriptionQueryResult<List<Chassis>, Chassis> chassisSubscribe() {
        return queryGateway
                .subscriptionQuery(new FindAllChassisQuery(), 
                		ResponseTypes.multipleInstancesOf(Chassis.class),
                		ResponseTypes.instanceOf(Chassis.class));
    }

    public SubscriptionQueryResult<Chassis, Chassis> chassisSubscribe(@DestinationVariable UUID chassisId) {
        return queryGateway
                .subscriptionQuery(new FindChassisQuery(new LoadChassisFilter(chassisId)), 
                		ResponseTypes.instanceOf(Chassis.class),
                		ResponseTypes.instanceOf(Chassis.class));
    }

	public SubscriptionQueryResult<Chassis, Chassis> findByNameLikeSubscribe( FindByNameLikeQuery query ) {
		return queryGateway.subscriptionQuery(query, 
			ResponseTypes.instanceOf(Chassis.class), 
			ResponseTypes.instanceOf(Chassis.class) );
    }
	
	public SubscriptionQueryResult<Chassis, Chassis> findBySerialNumSubscribe( FindBySerialNumQuery query ) {
		return queryGateway.subscriptionQuery(query, 
			ResponseTypes.instanceOf(Chassis.class), 
			ResponseTypes.instanceOf(Chassis.class) );
    }
	
	public SubscriptionQueryResult<List<Chassis>, Chassis> findByTypeSubscribe( FindByTypeQuery query ) {
	    return queryGateway.subscriptionQuery(query, 
			ResponseTypes.multipleInstancesOf(Chassis.class), 
			ResponseTypes.instanceOf(Chassis.class) );
    }
	



    // -------------------------------------------------
    // attributes
    // -------------------------------------------------
	@Autowired
    private final QueryGateway queryGateway;
}

